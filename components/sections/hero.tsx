'use client';

import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Particle from '../Particel';
import HeroButton from '../HeroButton';
import SocialLink from '../SocialLink';

const Hero = () => {
  return (
    <section
      id='heroSection'
      className='relative h-[calc(100vh_-_80px)] flex items-center justify-center bg-black/95 overflow-hidden'
    >
      <div className='flex items-center justify-center flex-col z-10'>
        <h1 className='text-white font-extrabold mb-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center'>
          I'm <span className='gradient__text'>Dev Asik</span>
        </h1>
        <h2 className='text-zinc-400 font-extrabold text-4xl sm:text-5xl lg:text-4xl tracking-tight text-center dark:text-white'>
          <Typewriter
            options={{
              strings: ['Web Developer', 'Web Designer', 'Programmer'],
              autoStart: true,
              loop: true,
              cursor: '👨‍💻',
            }}
          />
        </h2>
        <SocialLink />
        <HeroButton />
      </div>
      <Particle />
    </section>
  );
};

export default Hero;
