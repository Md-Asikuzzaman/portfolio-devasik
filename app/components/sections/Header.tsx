"use client";

import { NextPage } from "next";
import { useEffect } from "react";

import clsx from "clsx";

import Logo from "@/app/components/shared/Logo";
import NavOption from "@/app/components/shared/NavOption";
import MobileMenuSlider from "@/app/components/sections/MobileMenuSlider";
import MobileMenu from "@/app/components/shared/MobileMenu";
import { useShowBackground } from "@/lib/store";

const Header: NextPage = () => {
  const TOP_OFFSET = 66;
  const { showBackground, setShowBackground } = useShowBackground();

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
  }, [setShowBackground]);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full bg-gradient-to-r from-violet-500 to-pink-500 md:bg-transparent",
        showBackground
          ? "md:bg-black/70 md:bg-none md:backdrop-blur-xl"
          : "md:bg-transparent md:bg-none",
      )}
    >
      <nav className="header__container flex h-16 items-center justify-between">
        <Logo />
        <NavOption />
        <MobileMenu />
        <MobileMenuSlider />
      </nav>
    </header>
  );
};

export default Header;
