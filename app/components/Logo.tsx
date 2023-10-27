'use client';

import { TbCodeDots } from 'react-icons/tb';

const Logo = () => {
  return (
    <a className='flex items-center gap-1 text-xl text-white' href={'#'}>
      <TbCodeDots className='text-3xl text-orange-500 font-bold' /> dev asik
    </a>
  );
};

export default Logo;
