import { NextPage } from 'next';
import Image from 'next/image';
import { PiLinkDuotone } from 'react-icons/pi';
import { FiGithub } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface Props {
  id: number;
  photo: string;
  title: string;
  details: string;
  links: string;
  category?: string;
}

const Project: NextPage<Props> = ({ photo, title, details, links }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className='relative bg-[#171719] shadow-md text-center rounded-lg overflow-hidden'
    >
      <div className='relative h-44 w-full'>
        <Image
          className='shadow-md rounded-md h-full bg-contain'
          src={photo}
          alt={'project'}
          fill={true}
        />
      </div>
      <div className='p-4'>
        <h3 className='text-xl text-gray-300 text-center font-semibold pb-4'>
          {title}
        </h3>
        <p className='text-[#888888] text-sm text-center'>{details}</p>
        <div className='flex items-center justify-center gap-3 mt-4 mb-2'>
          <a
            className='h-10 w-10 rounded-full bg-[#3c2410] inline-flex items-center justify-center text-orange-500'
            href={links}
          >
            <PiLinkDuotone className='h-5 w-5' />
          </a>

          <a
            className='h-10 w-10 rounded-full bg-[#3c2410] inline-flex items-center justify-center text-orange-500'
            href={links}
          >
            <FiGithub className='h-5 w-5' />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
