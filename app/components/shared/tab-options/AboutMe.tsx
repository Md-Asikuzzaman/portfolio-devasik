import Image from 'next/image';
import { socialInfo } from '@/lib/social';

const AboutMe = () => {
  return (
    <div className='px-3'>
      <p className='text-white text-2xl font-semibold mb-5'>
        Hi, This is Md Asikuzzaman
      </p>
      <p className='mb-4 text-md lg:text-md lg:leading-8 text-[#d3d8e8]'>
        My name is Md Asikuzzaman. I'm a React developer and I absolutely love
        my passion. I am enjoying learn new things. You'll find me hardworking,
        fast learning, and fiercely ambitious. My expertise on MERN stack
        development such as (Mongodb, Express, React & Node). 😊
      </p>

      <p className='text-md lg:text-md lg:leading-8 text-[#d3d8e8]'>
        I love challenges and i know -there is always a solution. At my age, my
        unwavering focus is to be recognised as on of the best coders in tech. I
        love my clients, i enjoy my project and respect my teammates.
      </p>

      <a
        target='_blank'
        href={socialInfo.whatsApp}
        className='text-white bg-[#128c7e] duration-200 mt-5 hover:bg-[#075e54] focus:ring-4 focus:outline-none focus:ring-[#128c7e]/50 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2'
      >
        <Image
          className='mr-2'
          height={24}
          width={24}
          src='/images/whatsapp.png'
          alt='whatsapp'
        />
        WhatsApp
      </a>
    </div>
  );
};

export default AboutMe;
