"use client";

import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";

import { GoMoon } from "react-icons/go";

const ModeToggleButton = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Retrieve theme from local storage if available
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    // Update document theme class
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleSwitch = () => {
    // Toggle theme
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Update local storage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      className="h-[35px] w-[35px]  grid place-content-center rounded-full cursor-pointer group hover:bg-white/20 "
      onClick={handleSwitch}
    >
      {theme === "light" ? (
        <FiSun
          size={20}
          className="text-[#666666] group-hover:text-violet-600 dark:text-gray-400 dark:group-hover:text-white transition hover:rotate-180"
        />
      ) : (
        <GoMoon
          size={20}
          className="text-[#666666] group-hover:text-violet-600 dark:text-gray-400 dark:group-hover:text-white transition hover:rotate-90"
        />
      )}
    </div>
  );
};

export default ModeToggleButton;
