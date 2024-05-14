"use client";

import { useMenuActive } from "@/lib/store";
import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";

import { GoMoon } from "react-icons/go";

const ModeToggleButton = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const { setMenuActive } = useMenuActive();

  useEffect(() => {
    // Retrieve theme from local storage if available
    const storedTheme = localStorage.getItem("devasik-theme");
    if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    // Update document theme class
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    // Toggle theme
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Update local storage
    localStorage.setItem("devasik-theme", newTheme);
    // Close mobile menu
    setMenuActive(false);
  };

  return (
    <div
      className="group grid h-[35px] w-[35px] cursor-pointer place-content-center rounded-full transition hover:bg-black/10 dark:hover:bg-white/20"
      onClick={handleSwitch}
    >
      {theme === "light" ? (
        <GoMoon
          size={20}
          className="text-gray-500 transition group-hover:rotate-90 group-hover:text-violet-600 dark:text-gray-400 dark:group-hover:text-white"
        />
      ) : (
        <FiSun
          size={20}
          className="text-gray-500 transition group-hover:rotate-180 group-hover:text-violet-600 dark:text-gray-400 dark:group-hover:text-white"
        />
      )}
    </div>
  );
};

export default ModeToggleButton;
