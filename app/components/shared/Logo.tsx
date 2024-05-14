"use client";

import { FaCode } from "react-icons/fa6";

const Logo = () => {
  return (
    <>
      <a
        className="hidden items-center gap-2 text-xl text-slate-900 dark:text-white md:flex"
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
