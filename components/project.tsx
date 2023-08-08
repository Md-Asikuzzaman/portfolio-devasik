import { NextPage } from 'next';
import Image from 'next/image';
import { PiLinkDuotone } from 'react-icons/pi';
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
      className='relative bg-[#171719] shadow-md p-5 text-center rounded-lg'
    >
      <div className='relative h-44 w-full'>
        <Image
          className='shadow-md rounded-md h-full bg-cover'
          src={photo}
          alt={'project'}
          fill={true}
        />
      </div>
      <h3 className='text-xl text-gray-300 text-center font-semibold py-4'>
        {title}
      </h3>
      <p className='text-[#888888] text-sm text-center'>
        {details}
      </p>
      <a
        className='text-orange-500 font-medium inline-flex items-center gap-1 pt-4 transform duration-200 hover:scale-110'
        href={links}
      >
        <PiLinkDuotone className='h-5 w-5' />
        Live Demo
      </a>
    </motion.div>
  );
};

export default Project;
