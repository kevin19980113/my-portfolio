"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { GoProjectSymlink } from "react-icons/go";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section
      ref={ref}
      className="scroll-mt-28 mb-28 flex flex-col items-center gap-y-6"
      id="projects"
    >
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      <a
        href="https://www.frontendmentor.io/profile/kevin19980113"
        className={cn(
          buttonVariants(),
          "md:px-12 md:py-6 md:text-lg md:font-medium flex items-center gap-x-4 group"
        )}
        target="_blank"
      >
        See more projects
        <GoProjectSymlink className="transition-all group-hover:scale-110 group-hover:-translate-y-1" />{" "}
      </a>
    </section>
  );
}
