'use client';

import Image from 'next/image';
import Tab from '../tab';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id='about' className='py-14 dark:bg-gray-900'>
      <div className='container'>
        <h2 className='text-4xl text-center font-bold text-gray-900 mb-10 dark:text-white'>
          About Me
        </h2>
        <div className='grid grid-cols-3 gap-10 px-10'>
          <Image
            className='mx-auto rounded-full'
            src={'/images/dev.jpg'}
            alt='dev'
            height='300'
            width='300'
          />
          <Tab />
        </div>
      </div>
    </section>
  );
};

export default About;
