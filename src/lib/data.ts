import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import audiophileImg from "../../public/audiophile.png";
import happyHippoImg from "../../public/happyhippo.png";
import spaceTourismImg from "../../public/space-tourism.png";
import designoImg from "../../public/designo.png";
import cLogo from "../../public/C_Logo.png";
import pythonLogo from "../../public/Python-logo-notext.svg.png";
import HtmlLogo from "../../public/HTML5_logo_and_wordmark.svg.png";
import CssLogo from "../../public/CSS3_logo_and_wordmark.svg.png";
import jsLogo from "../../public/JavaScript-logo.png";
import ReactLogo from "../../public/React-icon.svg.png";
import tsLogo from "../../public/Typescript_logo_2020.svg.png";
import tailwindLogo from "../../public/Tailwind_CSS_Logo.svg.png";
import framerLogo from "../../public/framer-svgrepo-com.svg";
import gitLogo from "../../public/git-svgrepo-com.svg";
import nextjsLogo from "../../public/next-js-svgrepo-com.svg";
import taskManagementAppImg from "../../public/TaskManagementApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export type SectionName = (typeof links)[number]["name"];

export const experiencesData = [
  {
    title: "C Programming Practice teaching assistant",
    location: "Seoul, South Korea",
    description:
      "As a Teaching Assistant for the C Programming Practice course at my university, I was responsible for assisting the professor in delivering course content and providing support to students over Three semesters. My primary duties included conducting lab sessions, grading assignments, and offering one-on-one assistance to students struggling with course material. I  Enhanced problem-solving skills by debugging diverse student code and improved communication by explaining complex concepts clearly.",
    features: [],
    icon: React.createElement(LuGraduationCap),
    date: "2018, 2022",
  },
  {
    title: "Dental CT Program Development Team Intern",
    location: "Seoul, South Korea",
    description:
      "I completed an internship in 3D Dental CT program development, where I implemented some features of the software scheduled for release in the second half of the year.",
    features: [
      "Developed a 3D modification tool based on the concept of 3D rendering ( used C++ )",
      "Linked the 3D modifications to the actual CT image's viewpoint, opacity, etc, so clients could interact with the 3D modification tool through the user interface.",
      "Implemented the program's user interface (3D controller and CT Image Screen) ( used Qt )",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan-Mar, 2022",
  },
  {
    title: "Graduated Hankuk University of Foreign Studies",
    location: "Seoul, South Korea",
    description:
      "I graduated after 4 years of studying at Hankuk University of Foreign Studies. My major is Bio Medical Engineering. I also studied computer science & electrionic systems as a minor.",
    features: [],
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
];

export const projectsData = [
  {
    title: "Audiophile ecommerce",
    description:
      "Developed a high-performance e-commerce web using Next.js, React, and Tailwind CSS. Utilized react-hook-form and zod for efficient form handling and validation / Zustand for State management. Integrated Kinde for Authentication, resend for email verification.",
    tags: ["TypeScript", "React", "Next.js", "Tailwnd", "Kinde", "Resend"],
    imageUrl: audiophileImg,
    href: "https://audiophile-ecommerce-zg58.vercel.app",
    githubHref: "https://github.com/kevin19980113/audiophile-ecommerce",
  },
  {
    title: "Designo Page",
    description:
      "Developed a responsive and visually appealing web using Next.js for Designo, a platform showcasing various design services. The project involved creating multiple pages, including home, about, contact, and product categories, with a focus on user experience and performance optimization.",
    tags: ["TypeScript", "React", "Next.js", "Tailwnd", "Resend"],
    imageUrl: designoImg,
    href: "https://designo-page-delta.vercel.app",
    githubHref: "https://github.com/kevin19980113/designo-page",
  },
  {
    title: "Task Management Web App",
    description:
      "Developed a modern task management web app with drag-and-drop functionality for task reordering using React and TypeScript, Implemented state management with Zustand and utilized React Hook Form for form handling.",
    tags: ["React", "TypeScript", "Tailwind", "Framer-Motion"],
    imageUrl: taskManagementAppImg,
    href: "https://kevin19980113.github.io/Kanban-task-management-web-app/",
    githubHref:
      "https://github.com/kevin19980113/Kanban-task-management-web-app",
  },
  {
    title: "Happy Hippo Marketplace",
    description:
      "The Happy Hippo Marketplace is a modern e-commerce platform. It features a responsive and interactive user interface, secure payment processing, and efficient state management. Integrated Stripe and Kinde for secure payment processing with authentication.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind", "Kinde", "Stripe"],
    imageUrl: happyHippoImg,
    href: "https://happy-hippo-marketplace.vercel.app",
    githubHref: "https://github.com/kevin19980113/happy-hippo-marketplace",
  },
  {
    title: "Space Tourism Website",
    description:
      "The Space Tourism Website is a responsive web application designed to provide users with an immersive experience exploring space tourism options. The website features detailed information about various destinations, crew members, and the technology behind space travel.",
    tags: ["React", "React Router", "Javascript", "Tailwind"],
    imageUrl: spaceTourismImg,
    href: "https://kevin19980113.github.io/space-tourism-website/",
    githubHref: "https://github.com/kevin19980113/space-tourism-website",
  },
] as const;

export const skillsData = [
  { title: "C", img: cLogo },
  { title: "PYTHON", img: pythonLogo },
  { title: "HTML", img: HtmlLogo },
  { title: "CSS", img: CssLogo },
  { title: "JavaScript", img: jsLogo },
  { title: "TypeScript", img: tsLogo },
  { title: "React", img: ReactLogo },
  { title: "Tailwind", img: tailwindLogo },
  { title: "Framer Motion", img: framerLogo },
  { title: "Next.js", img: nextjsLogo },
  { title: "Git", img: gitLogo },
] as const;
