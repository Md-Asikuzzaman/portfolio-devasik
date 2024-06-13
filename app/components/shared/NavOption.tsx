"use client";

import ModeToggleButton from "./ModeToggleButton";
import GithubButton from "./GithubButton";
import { useActiveSection } from "@/lib/store";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavOption = () => {
  const { activeSection, setActiveSection } = useActiveSection();
  const navOptions = ["home", "about", "works", "contact"];

  // GSAP animation

  useGSAP(() => {
    gsap.to("#navOpt", {
      opacity: 1,
      transform: "translateY(0)",
      stagger: 0.2,
      ease: "bounce.inOut",
      duration: 0.6,
    });

    gsap.to("#hr", {
      opacity: 1,
      transform: "translateX(0)",
      ease: "power2.inOut",
      duration: 0.5,
      delay: 1,
    });

    gsap.to("#socialBtn", {
      opacity: 1,
      transform: "translateX(0)",
      ease: "power2.inOut",
      duration: 0.5,
      delay: 1,
    });
  }, []);

  return (
    <ul className="hidden items-center gap-8 md:flex">
      {navOptions.map((option, i) => (
        <li
          id="navOpt"
          className="-translate-y-12 opacity-0"
          key={i}
          onClick={() => setActiveSection(option)}
        >
          <a
            className={clsx(
              "text-base capitalize transition-colors duration-200 hover:text-violet-600 dark:hover:text-white",
              option == activeSection
                ? "text-violet-600 dark:text-white"
                : "text-pink-600/80 dark:text-gray-400",
            )}
            href={option == activeSection ? `#${option}` : "#"}
          >
            {option}
          </a>
        </li>
      ))}

      <div
        id="hr"
        className="h-5 w-[1px] shrink-0 flex-grow -translate-y-12 bg-gray-400 opacity-0 dark:bg-gray-600"
      />

      <li id="socialBtn" className="flex translate-x-20 gap-2 opacity-0">
        <GithubButton />
        <ModeToggleButton />
      </li>
    </ul>
  );
};

export default NavOption;
