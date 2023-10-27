'use client';

import { useCallback, useEffect, useState } from 'react';
import { NextPage } from 'next';
import NavOption from '../NavOption';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import MobileMenuSlider from '../MobileMenuSlider';
import { useActiveSection } from '@/hooks/useActiveSection';

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMobileMenu = useCallback(() => {
    setMenuActive((value) => !value);
  }, []);

  const { activeSection, setActiveSection } = useActiveSection();

  return (
    <header
      className={`fixed w-full top-0 z-50 bg-black border-b-[0.5px] border-[#3f3f3f] md:border-none md:bg-transparent ${
        showBackground ? 'md:bg-black/70 md:backdrop-blur-lg' : ''
      } `}
    >
      <nav className='header__container h-16 flex items-center justify-between'>
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
