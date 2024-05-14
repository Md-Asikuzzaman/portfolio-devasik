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
        "fixed left-0 top-[64px] h-screen w-full transform bg-[#fafafa]/90 px-8 py-5 backdrop-blur-xl duration-500 dark:bg-[#0D1224]/90 md:hidden",
        menuActive ? "translate-x-0" : "translate-x-full",
      )}
    >
      <ul className="flex flex-col gap-5">
        {navOptions.map((option, i) => (
          <li key={i} onClick={() => handleClick(option)}>
            <a
              className={clsx(
                "text-base font-semibold capitalize hover:text-pink-500",
                option == activeSection ? "text-pink-500" : "text-gray-400",
              )}
              href={option == activeSection ? `#${option}` : "#"}
            >
              {option}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-start gap-4 py-12">
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

        <div className="h-5 w-[1px] bg-gray-400 dark:bg-gray-600" />
        <ModeToggleButton />
      </div>

      <span className="absolute bottom-[15%] left-0 right-0 text-center text-sm text-slate-500">
        {appVersion}
      </span>
    </div>
  );
};

export default MobileMenuSlider;
