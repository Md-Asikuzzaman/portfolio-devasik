"use client";

import { NextPage } from "next";

import ModeToggleButton from "./ModeToggleButton";
import GithubButton from "./GithubButton";

interface Props {
  navOptionActive: string;
  setNavOptionActive: React.Dispatch<React.SetStateAction<string>>;
}

const NavOption: NextPage<Props> = ({
  navOptionActive,
  setNavOptionActive,
}) => {
  const navOptions = ["home", "about", "works", "contact"];

  return (
    <ul className="hidden md:flex items-center gap-8">
      {navOptions.map((option, i) => (
        <li key={i} onClick={() => setNavOptionActive(option)}>
          <a
            className={`capitalize ${
              option == navOptionActive
                ? "text-violet-600 dark:text-white"
                : "text-pink-600/80 dark:text-gray-400"
            } text-base transition-colors duration-200 hover:text-violet-600 dark:hover:text-white`}
            href={option == navOptionActive ? `#${option}` : "#"}
          >
            {option}
          </a>
        </li>
      ))}

      <div className="shrink-0 flex-grow w-[1px] h-5 bg-gray-400 dark:bg-gray-600" />

      <li className="flex gap-2">
        <GithubButton />
        <ModeToggleButton />
      </li>
    </ul>
  );
};

export default NavOption;
