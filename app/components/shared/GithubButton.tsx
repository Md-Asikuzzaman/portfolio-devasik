"use client";

import { socialInfo } from "@/lib";
import React from "react";
import { BiLogoGithub } from "react-icons/bi";

const GithubButton = () => {
  return (
    <div className="flex items-center gap-5">
      <a
        className="group grid h-[35px] w-[35px] cursor-pointer place-content-center rounded-full transition hover:bg-black/10 dark:hover:bg-white/20"
        target="_blank"
        href={socialInfo.github}
      >
        <BiLogoGithub
          size={23}
          className="text-gray-500 group-hover:text-violet-600 dark:text-gray-400 dark:group-hover:text-white"
        />
      </a>
    </div>
  );
};

export default GithubButton;
