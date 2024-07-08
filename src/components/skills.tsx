"use client";

import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const staggerChildrenVariants = {
  initial: {
    opacity: 0,
  },
  animate: () => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  }),
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <motion.ul
        className="flex flex-wrap justify-center gap-2 text-lg text-gray-800"
        variants={staggerChildrenVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/10 rounded-xl px-3 py-2 sm:px-5 sm:py-3 text-sm sm:text-base
            dark:bg-white/10 dark:text-white/80 flex items-center justify-center"
            key={index}
            variants={fadeInAnimationVariants}
          >
            <div className="w-full flex items-center justify-center gap-x-2 flex-wrap">
              <div className="relative size-6">
                <Image
                  src={skill.img}
                  alt={skill.title}
                  fill
                  className="object-contain object-center"
                />
              </div>

              <div>{skill.title}</div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
