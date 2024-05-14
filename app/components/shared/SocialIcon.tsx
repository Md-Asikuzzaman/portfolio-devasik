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
          "transform text-gray-400 transition duration-200 hover:scale-110 hover:text-gray-500 dark:text-zinc-400 dark:hover:text-zinc-200",
          variant === "hero" && "h-8 w-8",
          variant === "mobile" && "h-5 w-5",
        )}
      />
    </a>
  );
};

export default SocialIcon;
