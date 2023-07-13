'use client';

import { NextPage } from 'next';
import Image from 'next/image';
import { HiStar } from 'react-icons/hi';

interface Props {
  name: string;
  title: string;
  flag: string;
  feedback: string;
}

const Slide: NextPage<Props> = ({ name, title, flag, feedback }) => {
  return (
    <div className='keen-slider__slide p-5 cursor-grab'>
      <div className='flex items-center gap-5'>
        <Image src={flag} height={50} width={50} alt={'flag'} />
        <div>
          <h4 className='text-lg font-semibold'>{name}</h4>
          <p className='text-sm text-gray-400'>{title}</p>
        </div>
      </div>

      <div className='flex items-center gap-4 mt-5 mb-4'>
        <span className='flex items-center gap-1'>
          <HiStar className='shrink-0 h-6 w-6 text-green-700' />
          <HiStar className='shrink-0 h-6 w-6 text-green-700' />
          <HiStar className='shrink-0 h-6 w-6 text-green-700' />
          <HiStar className='shrink-0 h-6 w-6 text-green-700' />
          <HiStar className='shrink-0 h-6 w-6 text-green-700' />
        </span>
        <h5 className='font-semibold'>5.00</h5>
      </div>

      <p className='text-slate-500 text-base'>"{feedback}"</p>
    </div>
  );
};

export default Slide;
