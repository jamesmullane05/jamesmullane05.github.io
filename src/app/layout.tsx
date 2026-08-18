import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/themeContext";
import ScrollAnimations from "./components/ScrollAnimations";
import AnimationProvider from "./components/AnimationProvider";
import { SITE_URL } from "@/site.config";
import "lenis/dist/lenis.css";

const themeInitScript = `
  try {
    const savedTheme = localStorage.getItem("james-mullane-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : prefersDark ? "dark" : "light";

    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {}
`;

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: {
    default: "James Mullane | Software Engineering Portfolio",
    template: "%s | James Mullane",
  },
  description:
    "James Mullane is a Computer Science and Economics student at the University of Auckland creating full-stack applications, APIs, automation, and e-commerce systems.",
  keywords: [
    "James Mullane",
    "University of Auckland",
    "Software Engineering Intern",
    "Computer Science Student",
    "Auckland Developer",
    "Next.js Developer",
    "Automation",
  ],
  authors: [{ name: "James Mullane" }],
  creator: "James Mullane",
  openGraph: {
    title: "James Mullane | Software Engineering Portfolio",
    description:
      "Computer Science and Economics student at the University of Auckland creating full-stack applications, APIs, automation, and e-commerce systems.",
    url: SITE_URL,
    siteName: "James Mullane Portfolio",
    locale: "en_NZ",
    type: "website",
    images: [{ url: "/projects/human-nutrition-home.webp", width: 1200, height: 630, alt: "James Mullane software engineering portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "James Mullane | Software Engineering Portfolio",
    description:
      "Computer Science and Economics student at the University of Auckland creating practical software products.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-svh text-slate-950 antialiased transition-colors duration-300 dark:text-slate-100">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "James Mullane",
              url: SITE_URL,
              email: "mailto:jamesmullane05@gmail.com",
              address: { "@type": "PostalAddress", addressLocality: "Auckland", addressCountry: "NZ" },
              alumniOf: { "@type": "CollegeOrUniversity", name: "University of Auckland" },
              sameAs: ["https://github.com/Jamesmullane05", "https://www.linkedin.com/in/james-mullane-95a526252/"],
            }),
          }}
        />
        <ThemeProvider>
          <AnimationProvider>
            <ScrollAnimations />
            <div className="flex min-h-svh flex-col">
              <NavigationBar />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
