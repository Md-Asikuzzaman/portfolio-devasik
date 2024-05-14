"use client";

import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

import { PiLinkDuotone } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

interface Props {
  id?: string;
  image: string;
  title: string;
  description: string;
  github: string;
  website: string;
  category?: string;
}

const Project: NextPage<Props> = ({
  image,
  title,
  description,
  github,
  website,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: "anticipate",
        duration: 0.7,
      }}
      className="relative overflow-hidden rounded-lg border border-slate-300 bg-white text-center shadow-md transition-colors duration-200 ease-in-out hover:border-slate-400 dark:border-[#262B42] dark:bg-[#12172a] dark:hover:border-[#434865]"
    >
      <div className="relative h-48 w-full">
        <Image
          className="h-full rounded-t-lg bg-contain shadow-md"
          src={image}
          alt={"project-cover"}
          fill={true}
        />
      </div>
      <div className="p-4">
        <h3 className="pb-4 text-center text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-center text-sm leading-6 text-slate-600 dark:text-[#d3d8e8]">
          {description}
        </p>
        <div className="mb-2 mt-4 flex items-center justify-center gap-3">
          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 text-violet-500 transition-colors hover:bg-violet-500/30"
            href={website}
            target="_blank"
          >
            <PiLinkDuotone className="h-5 w-5" />
          </a>

          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/20 text-pink-500 transition-colors hover:bg-pink-500/30"
            href={github}
            target="_blank"
          >
            <FiGithub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
