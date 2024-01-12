'use client';

import { useState } from 'react';
import {
  BiLogoHtml5,
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoPostgresql,
} from 'react-icons/bi';

import { PiStudentLight } from 'react-icons/pi';

import { TbBrandNextjs, TbBrandMysql } from 'react-icons/tb';
import { SiExpress, SiBootstrap, SiRedux, SiPrisma } from 'react-icons/si';
import { FaNpm, FaYarn } from 'react-icons/fa';
import { BsBriefcase } from 'react-icons/bs';
import SkillCard from './SkillCard';
import { socialInfo } from '@/lib/social';
import Image from 'next/image';

const Tab = () => {
  const [tab, setTab] = useState(1);

  const handleTab = (id: any) => {
    setTab(id);
  };
  return (
    <div className='col-start-2 col-end-4'>
      <div className='text-sm font-medium text-center text-zinc-400'>
        <ul className='flex flex-wrap mb-8 lg:mb-12'>
          <li className='mr-2'>
            <button
              onClick={() => handleTab(1)}
              className={`inline-block p-2 lg:p-4 border-b-2 rounded-t-lg text-md md:text-lg ${
                tab == 1
                  ? 'text-pink-500 border-b-2 border-pink-500 rounded-t-lg active'
                  : 'hover:text-gray-300 hover:border-gray-300 border-transparent'
              } `}
            >
              About Me
            </button>
          </li>
          <li className='mr-2'>
            <button
              onClick={() => handleTab(2)}
              className={`inline-block p-2 lg:p-4 border-b-2 rounded-t-lg text-md md:text-lg  ${
                tab == 2
                  ? 'text-pink-500 border-b-2 border-pink-500 rounded-t-lg active'
                  : 'hover:text-gray-300 hover:border-gray-300 border-transparent'
              } `}
            >
              Skills
            </button>
          </li>
          <li className='mr-2'>
            <button
              onClick={() => handleTab(3)}
              className={`inline-block p-2 lg:p-4 border-b-2 rounded-t-lg text-md md:text-lg ${
                tab == 3
                  ? 'text-pink-500 border-b-2 border-pink-500 rounded-t-lg active'
                  : 'hover:text-gray-300 hover:border-gray-300 border-transparent'
              } `}
            >
              Experience
            </button>
          </li>
          <li className='mr-2'>
            <button
              onClick={() => handleTab(4)}
              className={`inline-block p-2 lg:p-4 border-b-2 rounded-t-lg text-md md:text-lg  ${
                tab == 4
                  ? 'text-pink-500 border-b-2 border-pink-500 rounded-t-lg active'
                  : 'hover:text-gray-300 hover:border-gray-300 border-transparent'
              } `}
            >
              Education
            </button>
          </li>
        </ul>
      </div>
      {tab == 1 && (
        <div className='px-3'>
          <p className='text-white text-2xl font-semibold mb-5'>
            Hi, This is Md Asikuzzaman
          </p>
          <p className='mb-4 text-md lg:text-md lg:leading-8 text-[#d3d8e8]'>
            My name is Md Asikuzzaman. I'm a React developer and I absolutely
            love my passion. I am enjoying learn new things. You'll find me
            hardworking, fast learning, and fiercely ambitious. My expertise on
            MERN stack development such as (Mongodb, Express, React & Node). 😊
          </p>

          <p className='text-md lg:text-md lg:leading-8 text-[#d3d8e8]'>
            I love challenges and i know -there is always a solution. At my age,
            my unwavering focus is to be recognised as on of the best coders in
            tech. I love my clients, i enjoy my project and respect my
            teammates.
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
      )}
      {tab == 2 && (
        <div className='flex flex-wrap gap-3'>
          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-orange-600 ring-1 ring-orange-500'>
            <BiLogoHtml5 className='h-5 w-5' />
            HTML5
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2  text-sky-600 ring-1 ring-sky-500'>
            <BiLogoCss3 className='h-5 w-5' />
            CSS3
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2  text-rose-600 ring-1 ring-rose-500'>
            <BiLogoSass className='h-5 w-5' />
            Sass
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2  text-sky-600 ring-1 ring-sky-500'>
            <BiLogoTailwindCss className='h-5 w-5' />
            Tailwind Css
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2  text-violet-600 ring-1 ring-violet-500'>
            <SiBootstrap className='h-5 w-5' />
            Bootstrap
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2  text-yellow-600 ring-1 ring-yellow-500'>
            <BiLogoJavascript className='h-5 w-5' />
            JavaScript
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-blue-600 ring-1 ring-blue-500'>
            <BiLogoTypescript className='h-5 w-5' />
            TypeScript
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-sky-600 ring-1 ring-sky-500'>
            <BiLogoReact className='h-5 w-5' />
            React
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-gray-400 ring-1 ring-gray-400'>
            <TbBrandNextjs className='h-5 w-5' />
            Next
          </span>
          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-green-600 ring-1 ring-green-500'>
            <BiLogoNodejs className='h-5 w-5' />
            Node
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-gray-400 ring-1 ring-gray-400'>
            <SiExpress className='h-5 w-5' />
            Express
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-violet-600 ring-1 ring-violet-500'>
            <SiRedux className='h-5 w-5' />
            Redux
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-gray-400 ring-1 ring-gray-400'>
            <SiPrisma className='h-5 w-5' />
            Prisma
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-teal-600 ring-1 ring-teal-500'>
            <TbBrandMysql className='h-5 w-5' />
            My SQL
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-sky-600 ring-1 ring-sky-500'>
            <BiLogoPostgresql className='h-5 w-5' />
            Postgresql
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-green-600 ring-1 ring-green-500'>
            <BiLogoMongodb className='h-5 w-5' />
            Mongo DB
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-rose-600 ring-1 ring-rose-500'>
            <FaNpm className='h-5 w-5' />
            npm
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-sky-600 ring-1 ring-sky-500'>
            <FaYarn className='h-5 w-5' />
            yarn
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 text-rose-600 ring-1 ring-rose-500'>
            <BiLogoGit className='h-5 w-5' />
            Git/Github
          </span>
        </div>
      )}
      {tab == 3 && (
        <div className='flex flex-col gap-5'>
          <SkillCard
            title='Senior Front-End Developer'
            company='Wafasoft (Contract)'
            duration='January 2019 - Running'
            details='   A Passionate Software Developer, Entrepreneur and Programmer. I love
            to play with coding, building software, and focusing on learning new
            technologies.'
            Icon={BsBriefcase}
          />

          <SkillCard
            title='Web Designer'
            company='City It Park (Intern)'
            duration='Jan 2019 - Running'
            details='A Passionate Software Developer, Entrepreneur and Programmer. I love
            to play with coding, building software, and focusing on learning new
            technologies.'
            Icon={BsBriefcase}
            border='via-pink-500'
            color='text-pink-500'
            bg='bg-pink-500/30'
          />
        </div>
      )}

      {tab == 4 && (
        <div className='flex flex-col gap-5'>
          <SkillCard
            title='B.S.c in CSE'
            company='Bangladesh University of Business & Technology'
            duration='Jan 2022 - Running'
            details='   A Passionate Software Developer, Entrepreneur and Programmer. I love
            to play with coding, building software, and focusing on learning new
            technologies.'
            Icon={PiStudentLight}
            border='via-pink-500'
            color='text-pink-500'
            bg='bg-pink-500/30'
          />

          <SkillCard
            title='Diploma in Computer Engineering'
            company='City Polytechnic Institute'
            duration='Jan 2018 - Dec 2022'
            details='   A Passionate Software Developer, Entrepreneur and Programmer. I love
            to play with coding, building software, and focusing on learning new
            technologies.'
            Icon={PiStudentLight}
          />
        </div>
      )}
    </div>
  );
};

export default Tab;
