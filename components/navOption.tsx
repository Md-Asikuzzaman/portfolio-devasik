'use client';

import { BiLogoGithub } from 'react-icons/bi';
// import { HiPhone } from 'react-icons/hi2';

const NavOption = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className='flex gap-8'>
      {children}
      <div className='w-[1px] h-auto bg-[#888888]' />
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
