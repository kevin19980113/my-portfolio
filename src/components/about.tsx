"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.3);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center text-lg leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I studied{" "}
        <span className="font-medium text-xl">Biomedical Engineering</span> with
        a minor in{" "}
        <span className="font-medium text-xl">
          Computer and Electronic Systems Engineering.{" "}
        </span>
        During my time at university, I served as a{" "}
        <span className="font-medium text-xl">
          C programming teaching assistant
        </span>{" "}
        under a professor for one and a half years. Additionally, I completed an
        internship at Osstem Implant, where I specialized in{" "}
        <span className="font-medium italic text-xl text-orange-400">
          3D rendering and developed a 3D modification for a dental CT program
          with user interaction Using C++ and QT
        </span>
        , I created my first user-interactive interface, which sparked my
        interest in the{" "}
        <span className="font-semibold text-xl text-blue-600 dark:text-blue-400">
          web front-end field.
        </span>{" "}
        Driven by my dream of working in the North American tech industry, I
        moved to Canada and have studied web development and improved my
        English. Also, I completed my remaining semesters and graduated.
        <br />
        <br />
        <span className="italic">My favorite part of programming</span> is the{" "}
        <span className="underline">problem-solving aspect.</span> I love the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          React, Next.js
        </span>
        . I am also familiar with{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          TypeScript
        </span>
        . I am always looking to learn new technologies. which is why{" "}
        <span className="italic text-emerald-600 dark:text-emerald-400">
          I am currently studying Backend field as well to expand my expertise.
        </span>{" "}
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a front-end
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        watching baseball games, watching movies or TV shows on Netflix, and
        spending quality time with my lovely girlfriend😍 I also enjoy watching{" "}
        <span className="italic font-medium">latest tech video</span> from other
        developer&apos;s channel.
      </p>
    </motion.section>
  );
}
