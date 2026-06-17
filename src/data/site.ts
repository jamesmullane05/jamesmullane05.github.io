import { IconType } from "react-icons";
import {
  SiSharp,
  SiDotnet,
  SiFlask,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

export const profile = {
  name: "James Mullane",
  location: "Auckland, New Zealand",
  email: "jamesmullane05@gmail.com",
  phone: "+64 22 323 4859",
  github: "https://github.com/Jamesmullane05",
  linkedin: "https://www.linkedin.com/in/james-mullane-95a526252/",
  leetcode: "https://leetcode.com/jamesmullane05",
  resume: "/cv.pdf",
  image: "/profile.jpg",
  imageAlt: "James Mullane",
  initials: "JM",
  navbarSubtitle: "CS & Economics · Auckland",
  headline: "Computer Science & Economics student building practical software products.",
  summary:
    "I’m a University of Auckland conjoint student focused on software engineering, automation, backend systems, and useful product experiences. I like turning messy real-world workflows into reliable tools, APIs, and web applications.",
};

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Human Nutrition Unit Website",
    eyebrow: "Capstone Project · Team Lead / Backend / DevOps",
    description:
      "Led a team of six developers building a user-facing website for a University of Auckland research institute.",
    impact:
      "Set up CI/CD workflows, database migrations, independent developer databases, backend architecture, and API integrations for the frontend.",
    tags: ["Next.js", "TypeScript", "APIs", "CI/CD", "Databases"],
  },
  {
    title: "Shopify Label Printing Desktop App",
    eyebrow: "Automation · E-commerce Operations",
    description:
      "Built a desktop tool that connects Shopify order data to Brother B-PAC label-printing software.",
    impact:
      "Turned a manual label-editing workflow into one-click printing while keeping fields editable for custom order requests.",
    tags: ["Shopify API", "C#", ".NET", "Automation", "Windows"],
  },
  {
    title: "CSV to Shopify Schema Tool",
    eyebrow: "Data Processing · Product Imports",
    description:
      "Created a schema-processing tool for transforming supplier CSV files into Shopify-ready product data.",
    impact:
      "Supported column renaming, margin calculations, data transformations, and AI-assisted product-title generation.",
    tags: ["Python", "CSV", "Shopify", "Data", "Automation"],
  },
  {
    title: "Facebook Marketplace Automation",
    eyebrow: "Browser Automation · Internal Tooling",
    description:
      "Built automation software that reads product information from Excel and creates Facebook Marketplace listings.",
    impact:
      "Reduced repetitive manual listing work and improved listing consistency across e-commerce sales channels.",
    tags: ["Python", "Excel", "Automation", "E-commerce"],
  },
  {
    title: "Cosmoshop E-commerce Platform",
    eyebrow: "Co-founder · Full-stack / Operations",
    description:
      "Built and operate Cosmoshop’s online storefront and supporting systems across website, Trade Me, Chrono24, and Facebook Marketplace.",
    impact:
      "Combined software, supplier relationships, customer support, stock management, and Meta marketing campaigns into a working commercial operation.",
    tags: ["Shopify", "Product", "Operations", "Meta Ads"],
    link: "https://www.cosmoshop.co.nz",
  },
  {
    title: "Linux User Group Website",
    eyebrow: "WDCC · Frontend / RSS",
    description:
      "Contributing to a team of eleven building a website for the University of Auckland Linux User Group.",
    impact:
      "Implemented an RSS feed for club news and updates while contributing to frontend development and team Git workflows.",
    tags: ["React", "RSS", "Frontend", "Git"],
  },
];

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "C#", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Flask", ".NET", "Pandas", "Tailwind CSS", "Jest"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Prisma", "REST APIs", "GraphQL", "Shopify API", "CI/CD", "Excel"],
  },
];

export const techIcons: { name: string; Icon: IconType }[] = [
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Python", Icon: SiPython },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Flask", Icon: SiFlask },
  { name: "C#", Icon: SiSharp },
  { name: ".NET", Icon: SiDotnet },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Prisma", Icon: SiPrisma },
  { name: "SQL", Icon: SiPostgresql },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
];

export type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  description: string;
  bullets: string[];
  logo: string;
  logoAlt: string;
  website?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "Co-founder",
    company: "Cosmoshop",
    date: "Jul 2023 – Present",
    logo: "https://cosmoshop.co.nz/cdn/shop/files/Cosmoshop_valentines_2_250x.svg?v=1769208287",
    logoAlt: "Cosmoshop logo",
    website: "https://www.cosmoshop.co.nz",
    description:
      "Co-founded and operate an e-commerce watch business while building tools that improve product listing, order processing, and fulfilment workflows.",
    bullets: [
      "Built and launched the online store and manage four sales channels: website, Trade Me, Chrono24, and Facebook Marketplace.",
      "Negotiated with UK and EU brand distributors and supported client meetings, stock takes, customer support, and marketing campaigns.",
      "Created automation and integration tools around Shopify, product imports, marketplace listings, and label printing.",
    ],
  },
  {
    role: "Web Developer",
    company: "Nuttall Henderson Jewellers",
    date: "Feb 2021 – Dec 2022",
    logo: "/logos/nuttall-henderson.svg",
    logoAlt: "Nuttall Henderson Jewellers logo",
    website: "https://nuttallhendersonjewellers.co.nz",
    description:
      "Designed, migrated, and maintained a Shopify website for a local jewellery business.",
    bullets: [
      "Migrated product data and information from WordPress to Shopify.",
      "Debugged website issues and provided technical support to improve the online shopping experience.",
    ],
  },
  {
    role: "Crew Member",
    company: "McDonald’s",
    date: "Feb 2022 – Feb 2023",
    logo: "/logos/mcdonalds.jpg",
    logoAlt: "McDonald’s NZ golden arches logo",
    website: "https://www.mcdonalds.com/nz/en-nz.html",
    description:
      "Developed customer service, communication, teamwork, and time-management skills in a fast-paced environment.",
    bullets: [
      "Followed strict quality, sanitation, and food-safety standards while working under time pressure.",
    ],
  },
];
