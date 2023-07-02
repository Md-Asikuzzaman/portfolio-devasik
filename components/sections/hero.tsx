'use client';

import Image from 'next/image';
import SocialLink from '../socialLink';
import HeroButton from '../heroButton';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className='relative h-[calc(100vh_-_80px)]'>
      <Image
        className='absolute z-[-1] '
        src='/images/hero-bg.jpg'
        alt='asasd'
        fill
        priority
      />
      <div className=' container h-[calc(100vh_-_80px)] flex items-center justify-center flex-col'>
        <h1 className='text-slate-900 font-extrabold mb-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white'>
          I'm <span className='text-orange-500'>Dev Asik</span>
        </h1>
        <h2 className='text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-4xl tracking-tight text-center dark:text-white'>
          Web Developer_
        </h2>
        <SocialLink />
        <HeroButton />
        <h1>
          <Typewriter
            options={{
              strings: ['Hello', 'World'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
    </section>
  );
};

export default Hero;
