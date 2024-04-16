import { NextPage } from "next";
import SocialLink from "@/app/components/shared/SocialLink";

import { appVersion, navOptions } from "@/lib";
import ModeToggleButton from "../shared/ModeToggleButton";
import { useActiveSection, useMenuActive } from "@/lib/store";

const MobileMenuSlider = () => {
  const { menuActive, setMenuActive } = useMenuActive();

  const { setActiveSection, activeSection } = useActiveSection();

  const handleClick = (option: string) => {
    setActiveSection(option);
    setMenuActive();
  };

  return (
    <div
      className={`fixed md:hidden top-[64px] bg-[#fafafa]/90 dark:bg-[#0D1224]/90 backdrop-blur-xl h-screen w-full left-0 px-8 py-5 transform duration-500 ${
        menuActive ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex flex-col gap-5">
        {navOptions.map((option, i) => (
          <li key={i} onClick={() => handleClick(option)}>
            <a
              className={`capitalize ${
                option == activeSection ? "text-pink-500" : "text-gray-400"
              } text-base font-semibold hover:text-pink-500`}
              href={option == activeSection ? `#${option}` : "#"}
            >
              {option}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 justify-start py-12">
        <SocialLink variant="mobile" />
        <div className="w-[1px] h-5 bg-gray-400 dark:bg-gray-600" />
        <ModeToggleButton />
      </div>

      <span className="text-sm text-slate-500 absolute left-0 right-0 text-center bottom-[15%]">
        {appVersion}
      </span>
    </div>
  );
};

export default MobileMenuSlider;
