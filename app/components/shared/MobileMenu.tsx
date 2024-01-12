'use client';

import { NextPage } from 'next';
interface Props {
  handleMobileMenu: () => void;
  menuActive: boolean;
}

const MobileMenu: NextPage<Props> = ({ menuActive, handleMobileMenu }) => {
  return (
    <div
      onClick={handleMobileMenu}
      className='text-white flex items-center justify-center md:hidden relative h-[40px] w-[40px]  cursor-pointer'
    >
      <span
        className={`h-[1.5px] w-[28px] bg-white inline-flex absolute transform transition ${
          menuActive
            ? 'translate-y-[0px] rotate-45'
            : 'translate-y-[-6px] rotate-0'
        }`}
      ></span>
      <span
        className={`h-[1.5px] w-[28px] bg-white inline-flex absolute transform transition ${
          menuActive
            ? 'translate-y-[0px] -rotate-45'
            : 'translate-y-[6px] rotate-0'
        }`}
      ></span>
    </div>
  );
};

export default MobileMenu;
