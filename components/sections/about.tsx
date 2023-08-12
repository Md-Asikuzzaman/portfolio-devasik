'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Tab from '../Tab';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const About = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.6,
  });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection('about');
    }
    console.log(inView);
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id='about' className='py-14 bg-black/90'>
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
