import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import clsx from "clsx";

const GoToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  const TOP_OFFSET = 400;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      onClick={handleTop}
      className={clsx(
        "fixed bottom-4 right-5 flex h-12 w-12 transform cursor-pointer items-center justify-center rounded-full bg-violet-600 transition ease-in-out hover:bg-violet-500",
        showTopBtn ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0",
      )}
    >
      <MdOutlineKeyboardArrowUp className="text-white" size={22} />
    </div>
  );
};

export default GoToTop;
