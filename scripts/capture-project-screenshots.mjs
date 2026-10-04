import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const VIEWPORT = { width: 1600, height: 800 };
const ROOT = path.resolve(import.meta.dirname, "..");

const projects = [
  {
    name: "Cosmoshop",
    url: "https://www.cosmoshop.co.nz",
    output: "public/projects/cosmoshop-home.png",
    waitMs: 6500,
  },
  {
    name: "Nuttall Henderson Jewellers",
    url: "https://nuttallhendersonjewellers.co.nz",
    output: "public/projects/nuttall-henderson-home.png",
    waitMs: 4500,
  },
  {
    name: "Northstar Markets",
    url: "https://northstar-teal-eight.vercel.app/stocks/NVDA",
    output: "public/projects/northstar-markets.png",
    waitMs: 6500,
  },
];

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.unref();
    server.on("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      server.close(() => resolve(address.port));
    });
  });
}

async function waitForJson(url, timeoutMs = 15000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
    } catch {
      // Edge is still starting.
    }
    await delay(150);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function createCdpClient(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl);
  const pending = new Map();
  let nextId = 0;

  const opened = new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  });

  return {
    async send(method, params = {}) {
      await opened;
      const id = ++nextId;
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        socket.send(JSON.stringify({ id, method, params }));
      });
    },
    close() {
      socket.close();
    },
  };
}

const tidyPage = String.raw`
  (() => {
    const closeSelectors = [
      'button[aria-label="Close modal"]',
      'button[aria-label*="close" i]',
      '[role="dialog"] button[class*="close" i]',
      '[role="dialog"] [aria-label*="close" i]'
    ];

    for (const selector of closeSelectors) {
      document.querySelectorAll(selector).forEach((element) => element.click());
    }

    document.querySelectorAll('iframe').forEach((element) => {
      const label = [element.title, element.name, element.src].join(' ');
      if (/chat|messenger|gorgias|zendesk|intercom/i.test(label)) {
        element.style.setProperty('display', 'none', 'important');
      }
    });

    document.querySelectorAll('shopify-chat').forEach((element) => {
      element.style.setProperty('display', 'none', 'important');
    });

    document
      .querySelectorAll('.cosmoshop-cart-drawer, .cosmoshop-cart-overlay, #cart-notification')
      .forEach((element) => {
        element.style.setProperty('display', 'none', 'important');
      });

    document.querySelectorAll('body *').forEach((element) => {
      const style = getComputedStyle(element);
      if (style.position !== 'fixed') return;
      const rect = element.getBoundingClientRect();
      const label = [
        element.getAttribute('aria-label'),
        element.getAttribute('title'),
        element.textContent
      ].join(' ');
      const smallBottomOverlay =
        rect.bottom > innerHeight - 220 && rect.width < 260 && rect.height < 260;
      if (
        smallBottomOverlay &&
        (element.tagName === 'IFRAME' || /chat|message|help|support/i.test(label))
      ) {
        element.style.setProperty('display', 'none', 'important');
      }
    });

    document.documentElement.style.scrollBehavior = 'auto';
    scrollTo(0, 0);
  })();
`;

async function captureProject(project) {
  const port = await getFreePort();
  const profilePath = path.join(
    tmpdir(),
    `codex-portfolio-screenshot-${process.pid}-${Date.now()}`,
  );
  const outputPath = path.join(ROOT, project.output);
  await mkdir(path.dirname(outputPath), { recursive: true });

  const edge = spawn(
    EDGE_PATH,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--no-first-run",
      "--disable-default-apps",
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${profilePath}`,
      "about:blank",
    ],
    { stdio: "ignore", windowsHide: true },
  );

  try {
    await waitForJson(`http://127.0.0.1:${port}/json/version`);
    const pages = await waitForJson(`http://127.0.0.1:${port}/json/list`);
    const page = pages.find((target) => target.type === "page");
    if (!page) throw new Error("Edge did not create a page target.");

    const cdp = createCdpClient(page.webSocketDebuggerUrl);
    try {
      await cdp.send("Page.enable");
      await cdp.send("Runtime.enable");
      await cdp.send("Emulation.setDeviceMetricsOverride", {
        ...VIEWPORT,
        deviceScaleFactor: 1,
        mobile: false,
      });
      await cdp.send("Page.navigate", { url: project.url });
      await delay(project.waitMs);
      await cdp.send("Runtime.evaluate", {
        expression: tidyPage,
        awaitPromise: true,
      });
      await delay(800);

      const { data } = await cdp.send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: false,
        fromSurface: true,
      });
      await writeFile(outputPath, Buffer.from(data, "base64"));
      console.log(`Captured ${project.name}: ${project.output}`);
    } finally {
      await cdp.send("Browser.close").catch(() => {});
      cdp.close();
    }
  } finally {
    if (edge.exitCode === null) edge.kill();
    await Promise.race([
      new Promise((resolve) => edge.once("exit", resolve)),
      delay(1500),
    ]);
    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        await rm(profilePath, { recursive: true, force: true });
        break;
      } catch (error) {
        if (attempt === 2) {
          console.warn(`Could not remove temporary profile: ${error.message}`);
          break;
        }
        await delay(500);
      }
    }
  }
}

for (const project of projects) {
  await captureProject(project);
}
