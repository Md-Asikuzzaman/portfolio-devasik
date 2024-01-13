import { socialInfo } from '@/lib';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className='px-3'>
      <p className='text-white text-2xl font-semibold mb-5'>
        Hi, I'm Md Asikuzzaman
      </p>
      <p className='mb-4 text-md lg:text-md lg:leading-8 text-[#d3d8e8]'>
        I'm a passionate Software Developer with 4+ years of expertise in{' '}
        <span className='border-b-[1px] border-b-violet-500'>
          Next.js, React.js, Prisma, MongoDB, Zod, and TypeScript.{' '}
        </span>
        I thrive on exploring new technologies, embracing challenges, and
        continually expanding my knowledge. Committed to delivering innovative
        solutions and enhancing user experiences through a blend of creativity
        and technical acumen. My journey in the world of software development is
        not just about writing code; it's a relentless pursuit of excellence.
        Explore my portfolio to witness my dedication to continuous learning,
        overcoming challenges, and crafting solutions that make an impact.
      </p>

      <p className='text-md lg:text-md lg:leading-8 text-[#d3d8e8]'>
        I love challenges and i know there is always a solution. At my age, my
        unwavering focus is to be recognized as on of the best coders in tech. I
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
