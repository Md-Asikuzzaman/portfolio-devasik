'use client';

import { NextPage } from 'next';
import { useState } from 'react';
import { BiLogoGithub } from 'react-icons/bi';
// import { HiPhone } from 'react-icons/hi2';

interface Props {
  navOptionActive: string;
  setNavOptionActive: any;
}

const NavOption: NextPage<Props> = ({
  navOptionActive,
  setNavOptionActive,
}) => {
  return (
    <ul className='hidden md:flex gap-8'>
      <li onClick={() => setNavOptionActive('home')}>
        <a
          className={`${
            navOptionActive == 'home' ? 'text-orange-500' : 'text-[#888888]'
          } text-base hover:text-orange-500`}
          href='#'
        >
          Home
        </a>
      </li>
      <li onClick={() => setNavOptionActive('about')}>
        <a
          className={`${
            navOptionActive == 'about' ? 'text-orange-500' : 'text-[#888888]'
          } text-base hover:text-orange-500`}
          href='#about'
        >
          About
        </a>
      </li>
      <li onClick={() => setNavOptionActive('works')}>
        <a
          className={`${
            navOptionActive == 'works' ? 'text-orange-500' : 'text-[#888888]'
          } text-base hover:text-orange-500`}
          href='#works'
        >
          Works
        </a>
      </li>
      <li onClick={() => setNavOptionActive('contact')}>
        <a
          className={`${
            navOptionActive == 'contact' ? 'text-orange-500' : 'text-[#888888]'
          } text-base hover:text-orange-500`}
          href='#contact'
        >
          Contact
        </a>
      </li>
      <div className='w-[1px] h-auto bg-[#3f3f3f]' />
      <div className='flex items-center gap-5'>
        {/* <a href='https://www.face.com'>
          <HiPhone size={20} className='text-[#888888] hover:text-gray-300' />
        </a> */}
        <a href='https://www.face.com'>
          <BiLogoGithub
            size={25}
            className='text-[#888888] hover:text-gray-300'
          />
        </a>
      </div>
    </ul>
  );
};

export default NavOption;
