'use client';

import { NextPage } from 'next';
interface Props {
  title: string;
  company: string;
  duration: string;
  details: string;
  Icon: any;
}

const SkillCard: NextPage<Props> = ({
  title,
  company,
  duration,
  details,
  Icon,
}) => {
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-1 mb-3'>
      <div className='p-6 bg-black rounded-md shadow-md'>
        <div className='flex h-[inherit] gap-6'>
          <div className='shrink-0 flex flex-col justify-center items-center gap-2'>
            <Icon className='shrink-0 text-3xl text-orange-500' />
            <div className='w-[2px] h-full bg-[#888888]' />
          </div>
          <div>
            <h3 className='text-xl font-bold tracking-tight text-white'>
              {title}
            </h3>
            <h5 className='text-md mb-2 text-[#888888]'>{company}</h5>
            <ul className='list-disc list-inside text-orange-500 text-sm'>
              <li>{duration}</li>
            </ul>
            <p className='text-[#888888] leading-6 mt-5'>{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
