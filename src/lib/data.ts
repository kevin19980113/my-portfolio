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
      "As a Teaching Assistant for the C Programming Practice course at my university, I was responsible for assisting the professor in delivering course content and providing support to students over Three semesters. I  Enhanced problem-solving skills by debugging diverse student code and improved communication by explaining complex concepts clearly.",
    features: [
      "Conducted weekly lab sessions for groups of 25-30 students, demonstrating practical applications of C programming concepts",
      " Graded and provided detailed feedback on student assignments, ensuring thorough understanding of course material",
      "offered personalized one-on-one assistance to students struggling with complex problem to solve",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2018, 2022",
  },
  {
    title: "Dental CT Program Development Team Intern",
    location: "Seoul, South Korea",
    description:
      "I completed an internship in 3D Dental CT program development, where I implemented some features of the software scheduled for release in the second half of the year.",
    features: [
      "Developed a 3D modification tool using C++, incorporating 3D rendering techniques to visualization of dental CT scans",
      "Integrated 3D modifications with CT image parameters, allowing real-time adjustments to viewpoint, opacity and other visual elements",
      "Implemented user interface for the 3D controller and CT image screen using Qt, improving user experience and workflow efficiency",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan-Mar, 2022",
  },
  {
    title: "Graduated Hankuk University of Foreign Studies",
    location: "Seoul, South Korea",
    description:
      "I graduated after 4 years of studying at Hankuk University of Foreign Studies.",
    features: [
      "Bachelor’s degree in Bio Medical Engineering",
      "Minor in Computer and electronics Systems Engineering",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
];

export const projectsData = [
  {
    title: "Audiophile ecommerce",
    description:
      "Developed a high-performance e-commerce web using Next.js, React, and Tailwind CSS. Utilized react-hook-form and zod schema for efficient form handling and validation / Zustand for State management. Integrated Kinde for Authentication, resend for email receipt.",
    tags: ["TypeScript", "React", "Next.js", "Tailwnd", "Kinde", "Resend"],
    imageUrl: audiophileImg,
    href: "https://audiophile-ecommerce-zg58.vercel.app",
    githubHref: "https://github.com/kevin19980113/audiophile-ecommerce",
  },
  {
    title: "Designo Page",
    description:
      "Developed a responsive and visually appealing web showcasing various design services using Next.js Implementing SSR and SSG. The project involved creating multiple pages, including home, about, contact, and product categories, with a focus on user experience and performance optimization.",
    tags: ["TypeScript", "React", "Next.js", "Tailwnd", "Resend"],
    imageUrl: designoImg,
    href: "https://designo-page-delta.vercel.app",
    githubHref: "https://github.com/kevin19980113/designo-page",
  },
  {
    title: "Task Management Web App",
    description:
      "Developed a modern task management web app with drag-and-drop functionality for task reordering using React and TypeScript, Implemented state management using Zustand ensuring efficient state handling without unnecessary rerendring and utilized React Hook Form for form handling.",
    tags: ["React", "TypeScript", "Tailwind", "Framer-Motion"],
    imageUrl: taskManagementAppImg,
    href: "https://kevin19980113.github.io/Kanban-task-management-web-app/",
    githubHref:
      "https://github.com/kevin19980113/Kanban-task-management-web-app",
  },
  {
    title: "Happy Hippo Marketplace",
    description:
      "The Happy Hippo Marketplace is a modern e-commerce Web. It features a responsive and interactive user interface, secure payment processing, and efficient state management. Integrated Stripe and Kinde for secure payment processing with authentication.",
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
