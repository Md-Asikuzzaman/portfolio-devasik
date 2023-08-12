import React, { useCallback, useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div
      onClick={handleTop}
      className={`fixed bottom-4 right-5 flex items-center justify-center h-12 w-12 cursor-pointer bg-[#3C2410] rounded-full transition hover:bg-[#523318] transform ${
        showTopBtn ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
      }`}
    >
      <MdOutlineKeyboardArrowUp className='text-white' size={22} />
    </div>
  );
};

export default GoToTop;
