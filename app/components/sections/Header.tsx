"use client";

import { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";

import Logo from "@/app/components/shared/Logo";
import NavOption from "@/app/components/shared/NavOption";
import MobileMenuSlider from "@/app/components/sections/MobileMenuSlider";
import MobileMenu from "@/app/components/shared/MobileMenu";

const Header: NextPage = () => {
  const [showBackground, setShowBackground] = useState<boolean>(false);
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const TOP_OFFSET = 66;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenu = useCallback(() => {
    setMenuActive((value) => !value);
  }, []);

  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-gradient-to-r from-violet-500 to-pink-500 md:bg-transparent ${
        showBackground
          ? "md:backdrop-blur-xl md:bg-black/70 md:bg-none"
          : "md:bg-transparent md:bg-none"
      } `}
    >
      <nav className="header__container h-16 flex items-center justify-between">
        <Logo />
        <NavOption
          navOptionActive={activeSection}
          setNavOptionActive={setActiveSection}
        />
        <MobileMenu
          menuActive={menuActive}
          handleMobileMenu={handleMobileMenu}
        />
        <MobileMenuSlider
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          navOptionActive={activeSection}
          setNavOptionActive={setActiveSection}
        />
      </nav>
    </header>
  );
};

export default Header;
