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
      className="relative bg-white dark:bg-[#12172a] shadow-md text-center rounded-lg overflow-hidden border border-slate-300 dark:border-[#262B42] hover:border-slate-400 dark:hover:border-[#434865] transition-colors duration-200 ease-in-out"
    >
      <div className="relative h-48 w-full">
        <Image
          className="shadow-md rounded-t-lg h-full bg-contain"
          src={image}
          alt={"project-cover"}
          fill={true}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl text-slate-900 dark:text-white text-center font-semibold pb-4">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-[#d3d8e8] text-sm leading-6 text-center">
          {description}
        </p>
        <div className="flex items-center justify-center gap-3 mt-4 mb-2">
          <a
            className="h-10 w-10 rounded-full bg-violet-500/20 hover:bg-violet-500/30 transition-colors inline-flex items-center justify-center text-violet-500"
            href={website}
            target="_blank"
          >
            <PiLinkDuotone className="h-5 w-5" />
          </a>

          <a
            className="h-10 w-10 rounded-full bg-pink-500/20 hover:bg-pink-500/30 transition-colors inline-flex items-center justify-center text-pink-500"
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
