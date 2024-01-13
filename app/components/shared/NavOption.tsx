'use client';

import { socialInfo } from '@/lib';
import { NextPage } from 'next';


import { BiLogoGithub } from 'react-icons/bi';

interface Props {
  navOptionActive: string;
  setNavOptionActive: React.Dispatch<React.SetStateAction<string>>;
}

const NavOption: NextPage<Props> = ({
  navOptionActive,
  setNavOptionActive,
}) => {
  const navOptions = ['home', 'about', 'works', 'contact'];

  return (
    <ul className='hidden md:flex gap-8'>
      {navOptions.map((option, i) => (
        <li key={i} onClick={() => setNavOptionActive(option)}>
          <a
            className={`capitalize ${
              option == navOptionActive ? 'text-white' : 'text-gray-400'
            } text-base hover:text-white transition-colors duration-200`}
            href={option == navOptionActive ? `#${option}` : '#'}
          >
            {option}
          </a>
        </li>
      ))}

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
