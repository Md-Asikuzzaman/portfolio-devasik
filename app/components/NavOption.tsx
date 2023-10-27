'use client';

import { socialInfo } from '@/lib/social';
import { NextPage } from 'next';
import { BiLogoGithub } from 'react-icons/bi';
// import { HiPhone } from 'react-icons/hi2';

interface Props {
  navOptionActive: string;
  setNavOptionActive: React.Dispatch<React.SetStateAction<string>>;
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
            navOptionActive == 'home' ? 'text-white' : 'text-gray-400'
          } text-base hover:text-white transition-colors duration-200`}
          href='#'
        >
          Home
        </a>
      </li>
      <li onClick={() => setNavOptionActive('about')}>
        <a
          className={`${
            navOptionActive == 'about' ? 'text-white' : 'text-gray-400'
          } text-base hover:text-white transition-colors duration-200`}
          href='#about'
        >
          About
        </a>
      </li>
      <li onClick={() => setNavOptionActive('works')}>
        <a
          className={`${
            navOptionActive == 'works' ? 'text-white' : 'text-gray-400'
          } text-base hover:text-white transition-colors duration-200`}
          href='#works'
        >
          Works
        </a>
      </li>
      <li onClick={() => setNavOptionActive('contact')}>
        <a
          className={`${
            navOptionActive == 'contact' ? 'text-white' : 'text-gray-400'
          } text-base hover:text-white transition-colors duration-200`}
          href='#contact'
        >
          Contact
        </a>
      </li>
      <div className='w-[1px] h-auto bg-gray-600' />
      <div className='flex items-center gap-5'>
        <a target='_blank' href={socialInfo.github}>
          <BiLogoGithub
            size={25}
            className='text-gray-400 hover:text-white transition-colors duration-200'
          />
        </a>
      </div>
    </ul>
  );
};

export default NavOption;
