"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { buttonVariants } from "./ui/button";
import myPhotoImg from "../../public/my-photo.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.3);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={myPhotoImg}
              alt="My Photo"
              width="200"
              height="200"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">
          Hello, I&apos;m HYUNHO LEE (Known as Kevin).
        </span>{" "}
        I&apos;m a{" "}
        <span className="font-bold text-blue-600 dark:text-blue-300">
          front-end developer
        </span>
        <br />I enjoy solving problems from various challenges
        <br />
        My focus is{" "}
        <span className="underline text-blue-600 dark:text-blue-300">
          React (Next.js)
        </span>
        .<br />
        Also, currently studying{" "}
        <span className="font-bold text-emerald-600 dark:text-emerald-300">
          Backend
        </span>{" "}
        to expand my expertise.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className={cn(
            buttonVariants(),
            "group px-7 py-6 rounded-xl flex items-center gap-x-2 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800"
          )}
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className={cn(
            buttonVariants(),
            "group px-7 py-6 rounded-full flex items-center bg-white text-black hover:bg-gray-300"
          )}
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-x-3 items-center justify-center">
          <a
            className={cn(
              buttonVariants(),
              "rounded-full px-4 py-4 bg-white group dark:hover:bg-slate-900"
            )}
            href="https://www.linkedin.com/in/hyunho-lee"
            target="_blank"
          >
            <BsLinkedin className="size-5 text-black group-hover:text-white dark:group-hover:text-white" />
          </a>

          <a
            className={cn(
              buttonVariants(),
              "rounded-full px-4 py-4 bg-white group dark:hover:bg-slate-900"
            )}
            href="https://github.com/kevin19980113"
            target="_blank"
          >
            <FaGithubSquare className="size-5 text-black group-hover:text-white dark:group-hover:text-white" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
