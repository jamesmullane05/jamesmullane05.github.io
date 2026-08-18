import { IconType } from "react-icons";
import { withBasePath } from "@/site.config";
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
  github: "https://github.com/Jamesmullane05",
  linkedin: "https://www.linkedin.com/in/james-mullane-95a526252/",
  leetcode: "https://leetcode.com/jamesmullane05",
  resume: withBasePath("/cv.pdf"),
  navbarSubtitle: "CS & Economics - Auckland",
  headline: "Computer Science and Economics student graduating July 2027.",
  summary:
    "I'm a University of Auckland Computer Science and Economics student interested in useful software, operational automation, and web experiences.",
};

export type Project = {
  title: string;
  eyebrow: string;
  description: string;
  impact: string;
  tags: string[];
  link?: string;
  linkLabel?: "View source" | "Visit live site" | "View project";
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageAspectRatio?: string;
};

export const projects: Project[] = [
  {
    title: "Spaced Eggs",
    eyebrow: "WDCC x SESA Hackathon - Cognitive Incline",
    description:
      "Built AI-powered study features for a gamified learning platform designed to give users stronger incentives to learn.",
    impact:
      "Integrated the GPT API to generate and display study cards, developed the card interface, and created an in-app music player while addressing the theme of combating cognitive decline.",
    tags: ["OpenAI API", "AI", "Flashcards", "Music Player", "Hackathon"],
    link: "https://github.com/FinleyNeilson/cookie-crunchers",
    linkLabel: "View source",
    featured: true,
    image: withBasePath("/projects/spaced-eggs.png"),
    imageFit: "contain",
    imageAspectRatio: "898 / 862",
    imageAlt:
      "Spaced Eggs learning platform showing a virtual egg companion, study progress, deck count, and accuracy statistics.",
  },
  {
    title: "Northstar Markets",
    eyebrow: "Financial Data - API Integration",
    description:
      "Built a stock-market dashboard that retrieves and presents current and historical market data from an external API.",
    impact:
      "Created stock search, price-change summaries, interactive historical charts, and selectable time periods in a focused responsive interface.",
    tags: ["Stock API", "Financial Data", "Data Visualisation", "Charts"],
    link: "https://github.com/jamesmullane05/northstar-markets",
    linkLabel: "View source",
    featured: true,
    image: withBasePath("/projects/northstar-markets.png"),
    imageFit: "contain",
    imageAspectRatio: "897 / 859",
    imageAlt:
      "Northstar Markets dashboard displaying Nvidia stock price data and a historical line chart.",
  },
  {
    title: "Human Nutrition Unit Website",
    eyebrow: "Capstone Project - Team Lead / Backend / DevOps",
    description:
      "Led a six-person development team delivering a public website for a University of Auckland research institute.",
    impact:
      "Set up CI/CD workflows, database migrations, independent developer databases, backend architecture, and API integrations for the frontend.",
    tags: ["Next.js", "TypeScript", "APIs", "CI/CD", "Databases"],
    link: "https://www.capitalise.space/projects/6a44d62d040af2a0b4341c4f",
    linkLabel: "View project",
    featured: true,
    image: withBasePath("/projects/human-nutrition-home.webp"),
    imageAlt:
      "Homepage of the Human Nutrition Unit website showing the Auckland research facility.",
  },
  {
    title: "Shopify Label Printing Desktop App",
    eyebrow: "Automation - E-commerce Operations",
    description:
      "Engineered a desktop application that connects Shopify order data to Brother B-PAC label-printing software.",
    impact:
      "Turned a manual label-editing workflow into one-click printing while keeping fields editable for custom order requests.",
    tags: ["Shopify API", "C#", ".NET", "Automation", "Windows"],
    featured: true,
  },
  {
    title: "CSV to Shopify Schema",
    eyebrow: "Data Processing - Product Imports",
    description:
      "Created a schema-driven processor that transforms supplier CSV files into Shopify-ready product data.",
    impact:
      "Supported column renaming, margin calculations, data transformations, and AI-assisted product-title generation.",
    tags: ["Python", "CSV", "Shopify", "Data", "Automation"],
    link: "https://github.com/jamesmullane05/CSV-to-Shopify-Schema-Language",
    linkLabel: "View source",
    featured: true,
    image: withBasePath("/projects/csv-schema-visual.webp"),
    imageAlt:
      "Supplier spreadsheet data flowing through a schema transformation engine into organized e-commerce product records.",
  },
  {
    title: "Facebook Marketplace Automation",
    eyebrow: "Browser Automation - Internal Systems",
    description:
      "Developed software that reads product information from Excel and creates Facebook Marketplace listings automatically.",
    impact:
      "Reduced repetitive manual listing work and improved listing consistency across e-commerce sales channels.",
    tags: ["Python", "Excel", "Automation", "E-commerce"],
  },
  {
    title: "Cosmoshop E-commerce Platform",
    eyebrow: "Co-founder - Full-stack / Operations",
    description:
      "Operate Cosmoshop's online storefront and connected systems across its website, Trade Me, Chrono24, and Facebook Marketplace.",
    impact:
      "Combined software, supplier relationships, customer support, stock management, and Meta marketing campaigns into a working commercial operation.",
    tags: ["Shopify", "Product", "Operations", "Meta Ads"],
    link: "https://www.cosmoshop.co.nz",
    linkLabel: "Visit live site",
    image: withBasePath("/projects/cosmoshop-home.png"),
    imageFit: "contain",
    imageAspectRatio: "901 / 864",
    imageAlt:
      "Cosmoshop homepage showing its navigation and a Citizen watch campaign.",
  },
  {
    title: "Nuttall Henderson Jewellers Website",
    eyebrow: "Web Development - Shopify Migration",
    description:
      "Designed, migrated, and maintained a Shopify website for an Auckland jewellery business.",
    impact:
      "Moved the product catalogue from WordPress, resolved website issues, and supported a smoother online shopping experience.",
    tags: ["Shopify", "E-commerce", "Migration", "Support"],
    link: "https://nuttallhendersonjewellers.co.nz",
    linkLabel: "Visit live site",
    image: withBasePath("/projects/nuttall-henderson-home.png"),
    imageFit: "contain",
    imageAspectRatio: "900 / 855",
    imageAlt:
      "Nuttall Henderson Jewellers homepage showing jewellery services and store navigation.",
  },
  {
    title: "Linux User Group Website",
    eyebrow: "WDCC - Frontend / RSS",
    description:
      "Contribute within an eleven-person team delivering a website for the University of Auckland Linux User Group.",
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
    title: "Platforms & Workflow",
    skills: ["Git", "GitHub", "Prisma", "REST APIs", "GraphQL", "Shopify API", "CI/CD", "Excel"],
  },
  {
    title: "Focus Areas",
    skills: ["Automation", "Backend Systems", "Data Processing", "E-commerce", "Developer Experience"],
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

export type EducationItem = {
  institution: string;
  qualification: string;
  date: string;
  details?: string;
};

export const education: EducationItem[] = [
  {
    institution: "University of Auckland",
    qualification: "Bachelor of Science / Bachelor of Commerce Conjoint",
    date: "Feb 2023 - Jul 2027",
    details: "Majors in Computer Science and Economics.",
  },
  {
    institution: "Rutherford College",
    qualification: "NCEA Levels 1, 2, and 3",
    date: "Feb 2018 - Dec 2022",
  },
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
    date: "Jul 2023 - Present",
    logo: "https://cosmoshop.co.nz/cdn/shop/files/Cosmoshop_valentines_2_250x.svg?v=1769208287",
    logoAlt: "Cosmoshop logo",
    website: "https://www.cosmoshop.co.nz",
    description:
      "Co-founded and operate an e-commerce watch business, improving product listing, order processing, and fulfilment through custom automation and integrations.",
    bullets: [
      "Launched the online store and manage four sales channels: website, Trade Me, Chrono24, and Facebook Marketplace.",
      "Negotiated with UK and EU brand distributors and supported client meetings, stock takes, customer support, and marketing campaigns.",
      "Automated Shopify product imports, marketplace listings, and order-label printing.",
    ],
  },
  {
    role: "Web Developer",
    company: "Nuttall Henderson Jewellers",
    date: "Feb 2021 - Dec 2022",
    logo: withBasePath("/logos/nuttall-henderson.svg"),
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
    company: "McDonald's",
    date: "Feb 2022 - Feb 2023",
    logo: withBasePath("/logos/mcdonalds.jpg"),
    logoAlt: "McDonald's NZ golden arches logo",
    website: "https://www.mcdonalds.com/nz/en-nz.html",
    description:
      "Developed customer service, communication, teamwork, and time-management skills in a fast-paced environment.",
    bullets: [
      "Followed strict quality, sanitation, and food-safety standards while working under time pressure.",
    ],
  },
];
