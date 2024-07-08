"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "next-themes";
import { useInView } from "react-intersection-observer";

type ExperienceElementProps = {
  theme: string | undefined;
  item: {
    date: string;
    icon: React.ReactNode;
    features: string[];
    title: string;
    location: string;
    description: string;
  };
};

function ExperienceElement({ theme, item }: ExperienceElementProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: isMounted
            ? `${theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)"}`
            : "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: isMounted
            ? `${
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)"
              }`
            : "0.4rem solid #9ca3af",
        }}
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: isMounted
            ? `${theme === "light" ? "white" : "#334155"}`
            : "white",

          fontSize: "1.5rem",
        }}
      >
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="font-normal !my-2">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {item.description}
        </p>
        <ul className="list-disc ml-4 space-y-4 !mt-2">
          {item.features.map((feature, index) => (
            <li key={index}>
              <p className="!font-normal text-gray-700 dark:text-white/75 flex items-center gap-x-1">
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </div>
  );
}

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <ExperienceElement key={index} theme={theme} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
