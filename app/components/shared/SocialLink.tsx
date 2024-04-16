"use client";

import { socialInfo } from "@/lib";
import { NextPage } from "next";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";

interface Props {
  variant: string;
}

const SocialLink: NextPage<Props> = ({ variant }) => {
  return (
    <div className="flex items-center gap-3">
      <a target="_blank" href={socialInfo.github}>
        <BsGithub
          className={`${variant == "hero" && "w-8 h-8"} ${
            variant == "mobile" && "w-5 h-5"
          } text-gray-400 dark:text-zinc-400 hover:text-gray-500 dark:hover:text-zinc-200 hover:scale-110 transition transform duration-200`}
        />
      </a>

      <a target="_blank" href={socialInfo.linkedin}>
        <BsLinkedin
          className={`${variant == "hero" && "w-8 h-8"} ${
            variant == "mobile" && "w-5 h-5"
          } text-gray-400 dark:text-zinc-400 hover:text-gray-500 dark:hover:text-zinc-200 hover:scale-110 transition transform duration-200`}
        />
      </a>

      <a target="_blank" href={socialInfo.facebook}>
        <BsFacebook
          className={`${variant == "hero" && "w-8 h-8"} ${
            variant == "mobile" && "w-5 h-5"
          } text-gray-400 dark:text-zinc-400 hover:text-gray-500 dark:hover:text-zinc-200 hover:scale-110 transition transform duration-200`}
        />
      </a>
    </div>
  );
};

export default SocialLink;
