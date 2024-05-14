"use client";

import { useMenuActive } from "@/lib/store";
import clsx from "clsx";

const MobileMenu = () => {
  const { menuActive, setMenuActive } = useMenuActive();

  return (
    <div
      onClick={() => setMenuActive()}
      className="relative flex h-[40px] w-[40px] cursor-pointer items-center justify-center text-white  md:hidden"
    >
      <span
        className={clsx(
          "absolute inline-flex h-[1.5px] w-[28px] transform bg-white transition",
          menuActive
            ? "translate-y-[0px] rotate-45"
            : "translate-y-[-6px] rotate-0",
        )}
      ></span>
      <span
        className={clsx(
          "absolute inline-flex h-[1.5px] w-[28px] transform bg-white transition",
          menuActive
            ? "translate-y-[0px] -rotate-45"
            : "translate-y-[6px] rotate-0",
        )}
      ></span>
    </div>
  );
};

export default MobileMenu;
