'use client';

import { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import NavOption from '../NavOption';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import MobileMenuSlider from '../MobileMenuSlider';

const Header: NextPage = () => {
  const [showBackground, setShowBackground] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [navOptionActive, setNavOptionActive] = useState('home');

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
      className={`fixed w-full top-0 z-50 bg-black border-b-[0.5px] border-[#3f3f3f] md:border-none md:bg-transparent ${
        showBackground ? 'md:bg-black/70 md:backdrop-blur-md' : ''
      } `}
    >
      <nav className='header__container h-20 flex items-center justify-between'>
        <Logo />
        <NavOption
          navOptionActive={navOptionActive}
          setNavOptionActive={setNavOptionActive}
        />
        <MobileMenu
          menuActive={menuActive}
          handleMobileMenu={handleMobileMenu}
        />
        <MobileMenuSlider
          menuActive={menuActive}
          handleMobileMenu={handleMobileMenu}
          navOptionActive={navOptionActive}
          setNavOptionActive={setNavOptionActive}
        />
      </nav>
    </header>
  );
};

export default Header;
