import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import clsx from "clsx";

import ModeToggleButton from "../shared/ModeToggleButton";
import SocialIcon from "../shared/SocialIcon";
import { appVersion, navOptions, socialInfo } from "@/lib";
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
      className={clsx(
        "fixed md:hidden top-[64px] bg-[#fafafa]/90 dark:bg-[#0D1224]/90 backdrop-blur-xl h-screen w-full left-0 px-8 py-5 transform duration-500",
        menuActive ? "translate-x-0" : "translate-x-full"
      )}
    >
      <ul className="flex flex-col gap-5">
        {navOptions.map((option, i) => (
          <li key={i} onClick={() => handleClick(option)}>
            <a
              className={clsx(
                "text-base font-semibold hover:text-pink-500 capitalize",
                option == activeSection ? "text-pink-500" : "text-gray-400"
              )}
              href={option == activeSection ? `#${option}` : "#"}
            >
              {option}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 justify-start py-12">
        <div className="flex items-center gap-3">
          <SocialIcon
            variant="mobile"
            link={socialInfo.github}
            Icon={BsGithub}
          />
          <SocialIcon
            variant="mobile"
            link={socialInfo.linkedin}
            Icon={BsLinkedin}
          />
          <SocialIcon
            variant="mobile"
            link={socialInfo.facebook}
            Icon={BsFacebook}
          />
        </div>

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
