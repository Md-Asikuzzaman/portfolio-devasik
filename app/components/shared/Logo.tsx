"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaCode } from "react-icons/fa6";

const Logo = () => {
  useGSAP(() => {
    gsap.to("#navLogo", {
      opacity: 1,
      transform: "translateY(0)",
      ease: "bounce.inOut",
    });
  }, []);

  return (
    <>
      <a
        id="navLogo"
        className="hidden -translate-y-12 items-center gap-2 text-xl text-slate-900 opacity-0 dark:text-white md:flex"
        href={"#"}
      >
        <FaCode className="text-2xl font-bold md:text-violet-500" /> dev asik
      </a>

      <a
        className="flex items-center gap-2 text-xl text-white md:hidden"
        href={"#"}
      >
        <FaCode className="text-2xl font-bold" /> dev asik
      </a>
    </>
  );
};

export default Logo;
