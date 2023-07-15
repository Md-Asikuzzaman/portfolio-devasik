'use client';

import Image from 'next/image';
import SocialLink from '../socialLink';
import HeroButton from '../heroButton';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className='relative h-[calc(100vh_-_80px)] flex items-center justify-center'>
      <Image
        className='absolute z-[-1]'
        src='/images/hero-bg.jpg'
        alt='bg'
        fill
        priority
      />

      <div className='relative max-w-[900px] w-full h-[65vh]'>
        <Image src='/desktop.png' alt='bg' fill={true} />
        <div className='absolute container  top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-center flex-col'>
          <h1 className='text-slate-900 font-extrabold mb-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white'>
            I'm <span className='text-orange-500'>Dev Asik</span>
          </h1>
          <h2 className='text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-4xl tracking-tight text-center dark:text-white'>
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
      </div>
    </section>
  );
};

export default Hero;
