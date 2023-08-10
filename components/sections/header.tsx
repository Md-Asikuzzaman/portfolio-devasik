'use client';

import { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import NavOption from '../NavOption';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';

const Header: NextPage = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const TOP_OFFSET = 66;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenu = useCallback(() => {
    setMenuActive((value) => !value);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 ${
        showBackground ? 'bg-black/70 backdrop-blur-md' : ''
      } `}
    >
      <nav className='header__container h-20 flex items-center justify-between'>
        <Logo />
        <NavOption />
        <MobileMenu
          menuActive={menuActive}
          handleMobileMenu={handleMobileMenu}
        />
      </nav>
    </header>
  );
};

export default Header;
