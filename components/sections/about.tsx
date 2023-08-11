'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Tab from '../Tab';

const About = () => {
  return (
    <section id='about' className='py-14 bg-black/90'>
      <div className='container'>
        <h2 className='text-3xl md:text-4xl text-center font-bold text-white mb-10'>
          About Me
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
          <Image
            className='rounded-full'
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
