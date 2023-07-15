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
      className='relative bg-[#F9F9FF] shadow-md p-5 text-center rounded-md dark:bg-gray-800'
    >
      <div className='relative h-44 w-full'>
        <Image
          className='shadow-md rounded-md'
          src={photo}
          alt={'project'}
          fill={true}
        />
      </div>
      <h3 className='text-xl text-slate-600 text-center font-semibold py-4 dark:text-gray-200'>
        {title}
      </h3>
      <p className='text-slate-500 text-sm text-center dark:text-gray-300'>
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
