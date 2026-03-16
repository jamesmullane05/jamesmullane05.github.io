import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiPython,
  SiSharp,
  SiDotnet,
  SiOpenjdk,
  SiMongodb,
  SiVercel,
} from "react-icons/si";

const skillIcons: Record<string, React.ComponentType> = {
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "Node.js": SiNodedotjs,
  "Tailwind CSS": SiTailwindcss,
  "HTML": SiHtml5,
  "CSS": SiCss,
  "Git": SiGit,
  "GitHub": SiGithub,
  "Python": SiPython,
  "C#": SiSharp,
  ".NET": SiDotnet,
  "Java": SiOpenjdk,
  "MongoDB": SiMongodb,
  "Vercel": SiVercel,
};

export default skillIcons;