'use client';

import Image from 'next/image';
import Tab from '../Tab';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection('about');
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id='about' className='relative overflow-hidden pb-12'>
      <div className='relative -z-50 pt-12'>
        <div className='flex flex-row justify-center'>
          <div className='absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#262B42] to-transparent'></div>
          <div className='w-[300px] h-[300px] bg-violet-500/80 rounded-full absolute -top-[150px] filter blur-3xl  opacity-20'></div>
        </div>
      </div>
      <div className='container'>
        <h2 className='text-2xl md:text-3xl text-center font-bold text-white mb-10'>
          About Me
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
          <Image
            className='rounded-full'
            src={'/images/dev.jpg'}
            alt='dev'
            height='250'
            width='250'
          />
          <Tab />
        </div>
      </div>
    </section>
  );
};

export default About;
