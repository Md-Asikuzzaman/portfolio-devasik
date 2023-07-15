'use client';

import { useState } from 'react';
import { NextPage } from 'next';
import { TbCodeDots } from 'react-icons/tb';
import NavOption from '../navOption';

const Header: NextPage = () => {
  const [navOptionActive, setNavOptionActive] = useState('home');

  return (
    <header className='sticky top-0 bg-[#ffffff85] z-50 backdrop-blur-md dark:bg-[#11182785]'>
      <nav className='header__container h-20 flex items-center justify-between'>
        <a
          className='flex items-center gap-1 text-xl dark:text-white'
          href={'#'}
        >
          <TbCodeDots className='text-3xl text-orange-500' /> dev asik
        </a>

        <NavOption>
          <li onClick={() => setNavOptionActive('home')}>
            <a
              className={`${
                navOptionActive == 'home'
                  ? 'text-orange-500'
                  : 'text-slate-800 dark:text-white'
              } text-base font-medium hover:text-orange-500 dark:hover:text-orange-500`}
              href='#'
            >
              Home
            </a>
          </li>
          <li onClick={() => setNavOptionActive('about')}>
            <a
              className={`${
                navOptionActive == 'about'
                  ? 'text-orange-500'
                  : 'text-slate-800 dark:text-white'
              } text-base font-medium hover:text-orange-500 dark:hover:text-orange-500`}
              href='#about'
            >
              About
            </a>
          </li>
          <li onClick={() => setNavOptionActive('works')}>
            <a
              className={`${
                navOptionActive == 'works'
                  ? 'text-orange-500'
                  : 'text-slate-800 dark:text-white'
              } text-base font-medium hover:text-orange-500 dark:hover:text-orange-500`}
              href='#works'
            >
              Works
            </a>
          </li>
          <li onClick={() => setNavOptionActive('contact')}>
            <a
              className={`${
                navOptionActive == 'contact'
                  ? 'text-orange-500'
                  : 'text-slate-800 dark:text-white'
              } text-base font-medium hover:text-orange-500 dark:hover:text-orange-500`}
              href='#'
            >
              Contact
            </a>
          </li>
        </NavOption>
      </nav>
    </header>
  );
};

export default Header;
