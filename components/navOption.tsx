'use client';

import useColorMode from '@/hooks/useColorMode';
import { BiLogoGithub } from 'react-icons/bi';
import { BiSun } from 'react-icons/bi';
import { LuMoonStar } from 'react-icons/lu';

const NavOption = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <ul className='flex gap-8'>
      {children}
      <div className='w-[1px] h-auto bg-slate-200 dark:bg-slate-500' />
      <div className='flex items-center gap-5'>
        <div className=''>
          {colorMode === 'light' ? (
            <LuMoonStar
              title='dark'
              onClick={() =>
                setColorMode(colorMode === 'light' ? 'dark' : 'light')
              }
              className='w-6 h-6 text-orange-500 cursor-pointer'
            />
          ) : (
            <BiSun
              title='light'
              onClick={() =>
                setColorMode(colorMode === 'dark' ? 'light' : 'dark')
              }
              className='w-6 h-6 text-orange-500 cursor-pointer'
            />
          )}
        </div>
        <a href='https://www.face.com'>
          <BiLogoGithub className='w-6 h-6 text-[#888888] hover:text-gray-300' />
        </a>
      </div>
    </ul>
  );
};

export default NavOption;
