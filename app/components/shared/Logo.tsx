"use client";

import { FaCode } from "react-icons/fa6";

const Logo = () => {
  return (
    <a
      className="flex items-center gap-2 text-xl text-slate-900 dark:text-white"
      href={"#"}
    >
      <FaCode className="text-2xl  md:text-violet-500 font-bold" /> dev asik
    </a>
  );
};

export default Logo;
