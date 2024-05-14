"use client";

import GoToTop from "@/app/components/shared/GoToTop";

const Footer = () => {
  return (
    <footer className="overflow-hidden pb-5 lg:pb-10">
      <div className="relative z-0 pt-5 lg:pt-10">
        <div className="flex flex-row justify-center">
          <div className="absolute top-0 h-[1px] w-full bg-violet-300 dark:bg-[#262B42]"></div>
          <div className="absolute -top-[150px] h-[300px] w-[300px] rounded-full bg-violet-500/80 opacity-20 blur-3xl filter"></div>
        </div>
      </div>

      <div className="container z-10">
        <p className="text-center text-base text-slate-900 dark:text-white">
          &copy; {new Date().getFullYear()} Dev Asik.
        </p>
      </div>

      {/* go to top button */}
      <GoToTop />
    </footer>
  );
};

export default Footer;
