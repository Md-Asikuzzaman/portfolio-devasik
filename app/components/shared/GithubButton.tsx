"use client";

import { socialInfo } from "@/lib";
import React from "react";
import { BiLogoGithub } from "react-icons/bi";

const GithubButton = () => {
  return (
    <div className="flex items-center gap-5">
      <a
        className="h-[35px] w-[35px] grid place-content-center rounded-full cursor-pointer group hover:bg-white/20"
        target="_blank"
        href={socialInfo.github}
      >
        <BiLogoGithub
          size={23}
          className="text-[#666666] group-hover:text-violet-600 dark:text-gray-400 dark:group-hover:text-white transition-colors"
        />
      </a>
    </div>
  );
};

export default GithubButton;
