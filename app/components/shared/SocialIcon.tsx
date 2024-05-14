"use client";

import clsx from "clsx";
import { NextPage } from "next";
import { IconType } from "react-icons";

interface Props {
  variant: "hero" | "mobile";
  Icon: IconType;
  link: string;
}

const SocialIcon: NextPage<Props> = ({ variant, Icon, link }) => {
  return (
    <a target="_blank" href={link}>
      <Icon
        className={clsx(
          "text-gray-400 dark:text-zinc-400 hover:text-gray-500 dark:hover:text-zinc-200 hover:scale-110 transition transform duration-200",
          variant === "hero" && "w-8 h-8",
          variant === "mobile" && "w-5 h-5"
        )}
      />
    </a>
  );
};

export default SocialIcon;
