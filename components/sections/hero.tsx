'use client';

import Typewriter from 'typewriter-effect';
import Particle from '../Particel';
import HeroButton from '../HeroButton';
import SocialLink from '../SocialLink';
import { useEffect } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.01,
  });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection('home');
    }
    console.log(inView);
  }, [inView, setActiveSection]);

  console.log(inView);

  return (
    <section
      ref={ref}
      id='heroSection'
      className='relative h-[calc(100vh_-_80px)] flex items-center justify-center bg-black/95 overflow-hidden'
    >
      <div className='flex items-center justify-center flex-col z-10'>
        <h1 className='text-white font-extrabold mb-6 text-5xl lg:text-6xl tracking-tight text-center'>
          I'm <span className='gradient__text'>Dev Asik</span>
        </h1>
        <h2 className='text-zinc-400 font-extrabold text-2xl md:text-3xl lg:text-4xl tracking-tight text-center dark:text-white'>
          <Typewriter
            options={{
              strings: [
                'Full Stack Developer',
                'Senior Frontend Engineer',
                'Programmer',
              ],
              autoStart: true,
              loop: true,
              cursor: '👨‍💻',
            }}
          />
        </h2>
        <SocialLink variant='hero' />
        <HeroButton />
      </div>
      <Particle />
    </section>
  );
};

export default Hero;
