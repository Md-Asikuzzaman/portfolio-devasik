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

const Tab = () => {
  const [tab, setTab] = useState(1);

  const handleTab = (id: any) => {
    setTab(id);
  };
  return (
    <div className='col-start-2 col-end-4'>
      <div className='text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700'>
        <ul className='flex flex-wrap -mb-px'>
          <li className='mr-2'>
            <button
              onClick={() => handleTab(1)}
              className={`inline-block p-4 border-b-2 rounded-t-lg  ${
                tab == 1
                  ? 'text-orange-500 border-b-2 border-orange-500 rounded-t-lg active'
                  : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 border-transparent'
              } `}
            >
              About Me
            </button>
          </li>
          <li className='mr-2'>
            <button
              onClick={() => handleTab(2)}
              className={`inline-block p-4 border-b-2 rounded-t-lg  ${
                tab == 2
                  ? 'text-orange-500 border-b-2 border-orange-500 rounded-t-lg active'
                  : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 border-transparent'
              } `}
            >
              Skills
            </button>
          </li>
          <li className='mr-2'>
            <button
              onClick={() => handleTab(3)}
              className={`inline-block p-4 border-b-2 rounded-t-lg  ${
                tab == 3
                  ? 'text-orange-500 border-b-2 border-orange-500 rounded-t-lg active'
                  : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 border-transparent'
              } `}
            >
              Experience
            </button>
          </li>
          <li className='mr-2'>
            <button
              onClick={() => handleTab(4)}
              className={`inline-block p-4 border-b-2 rounded-t-lg  ${
                tab == 4
                  ? 'text-orange-500 border-b-2 border-orange-500 rounded-t-lg active'
                  : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 border-transparent'
              } `}
            >
              Education
            </button>
          </li>
        </ul>
      </div>
      {tab == 1 && (
        <div className='p-4 pt-10'>
          <p className='text-slate-500 mb-5 font-semibold'>
            Hi, This is Md Asikuzzaman
          </p>
          <p className='text-slate-500 mb-5 leading-7'>
            A Passionate Software Developer, Entrepreneur and Programmer. I love
            to play with coding, building software, and focusing on learning new
            technologies. Currently I am running a well known software company
            called Triangle Technologies Limited. Also, I have been working as a
            Senior Software Engineer for the last 3 years at a leading IT
            enabled business company known as HUSSAINS™ Business Consultants
            Limited.
          </p>

          <a
            href='https://wa.me/+8801995580669'
            target='_blank'
            className='text-white bg-[#128c7e] duration-200 mt-5 hover:bg-[#075e54] focus:ring-4 focus:outline-none focus:ring-[#128c7e]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2'
          >
            <img
              className='h-6 w-6 mr-2'
              src='/images/whatsapp.png'
              alt='whatsapp'
            />
            WhatsApp
          </a>
        </div>
      )}
      {tab == 2 && (
        <div className='p-4 pt-10 flex flex-wrap gap-3'>
          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-orange-50 text-orange-600 ring-1 ring-orange-500'>
            <BiLogoHtml5 className='h-5 w-5' />
            HTML5
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 ring-1 ring-sky-500'>
            <BiLogoCss3 className='h-5 w-5' />
            CSS3
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-rose-50 text-rose-600 ring-1 ring-rose-500'>
            <BiLogoSass className='h-5 w-5' />
            Sass
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 ring-1 ring-sky-500'>
            <BiLogoTailwindCss className='h-5 w-5' />
            Tailwind Css
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-violet-50 text-violet-600 ring-1 ring-violet-500'>
            <SiBootstrap className='h-5 w-5' />
            Bootstrap
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-yellow-50 text-yellow-600 ring-1 ring-yellow-500'>
            <BiLogoJavascript className='h-5 w-5' />
            JavaScript
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-blue-50 text-blue-600 ring-1 ring-blue-500'>
            <BiLogoTypescript className='h-5 w-5' />
            TypeScript
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 ring-1 ring-sky-500'>
            <BiLogoReact className='h-5 w-5' />
            React
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-50 text-slate-600 ring-1 ring-slate-500'>
            <TbBrandNextjs className='h-5 w-5' />
            Next
          </span>
          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-green-50 text-green-600 ring-1 ring-green-500'>
            <BiLogoNodejs className='h-5 w-5' />
            Node
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-50 text-slate-600 ring-1 ring-slate-500'>
            <SiExpress className='h-5 w-5' />
            Express
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-violet-50 text-violet-600 ring-1 ring-violet-500'>
            <SiRedux className='h-5 w-5' />
            Redux
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-50 text-slate-600 ring-1 ring-slate-500'>
            <SiPrisma className='h-5 w-5' />
            Prisma
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-teal-50 text-teal-600 ring-1 ring-teal-500'>
            <TbBrandMysql className='h-5 w-5' />
            My SQL
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 ring-1 ring-sky-500'>
            <BiLogoPostgresql className='h-5 w-5' />
            Postgresql
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-green-50 text-green-600 ring-1 ring-green-500'>
            <BiLogoMongodb className='h-5 w-5' />
            Mongo DB
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-rose-50 text-rose-600 ring-1 ring-rose-500'>
            <FaNpm className='h-5 w-5' />
            npm
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 ring-1 ring-sky-500'>
            <FaYarn className='h-5 w-5' />
            yarn
          </span>

          <span className='inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-rose-50 text-rose-600 ring-1 ring-rose-500'>
            <BiLogoGit className='h-5 w-5' />
            Git/Github
          </span>
        </div>
      )}
      {tab == 3 && (
        <div className='mt-5'>
          <div className='px-5 py-6 mt-5 bg-slate-50 rounded-md shadow-md'>
            <div className='flex h-[inherit] gap-6'>
              <div className='shrink-0 flex flex-col justify-center items-center gap-2'>
                <BsBriefcase className='shrink-0 text-3xl text-orange-500' />
                <div className='w-[2px] h-full bg-orange-500' />
              </div>
              <div>
                <h3 className='text-xl font-bold tracking-tight text-slate-800 dark:text-white'>
                  Senior Front-end Developer
                </h3>
                <h5 className='font-bold text-sm mb-2 text-gray-500'>
                  - Upwork (Freeluncher)
                </h5>
                <span className='inline-flex items-center gap-1 py-1 rounded-full text-xs font-semibold whitespace-nowrap px-2 focus:outline-none focus:ring-2 bg-orange-50 text-orange-600 ring-1 ring-orange-500'>
                  January 2019 - Running
                </span>
                <p className='text-slate-500 leading-7 mt-5'>
                  A Passionate Software Developer, Entrepreneur and Programmer.
                  I love to play with coding, building software, and focusing on
                  learning new technologies. Currently I am running a well known
                  software company called Triangle Technologies Limited. Also, I
                  have been working as a Senior Software Engineer for the last 3
                  years at a leading IT enabled business company known as
                  HUSSAINS™ Business Consultants Limited.
                </p>
              </div>
            </div>
          </div>

          <div className='px-5 py-6 mt-5 bg-slate-50 rounded-md shadow-md'>
            <div className='flex h-[inherit] gap-6'>
              <div className='shrink-0 flex flex-col justify-center items-center gap-2'>
                <BsBriefcase className='shrink-0 text-3xl text-orange-500' />
                <div className='w-[2px] h-full bg-orange-500' />
              </div>
              <div>
                <h3 className='text-xl font-bold tracking-tight text-slate-800 dark:text-white'>
                  Full Stack Developer
                </h3>
                <h5 className='font-bold text-sm mb-2 text-gray-500'>
                  - City It Park
                </h5>
                <span className='inline-flex items-center gap-1 py-1 rounded-full text-xs font-semibold whitespace-nowrap px-2 focus:outline-none focus:ring-2 bg-orange-50 text-orange-600 ring-1 ring-orange-500'>
                  January 2019 - Running
                </span>
                <p className='text-slate-500 leading-7 mt-5'>
                  A Passionate Software Developer, Entrepreneur and Programmer.
                  I love to play with coding, building software, and focusing on
                  learning new technologies. Currently I am running a well known
                  software company called Triangle Technologies Limited. Also, I
                  have been working as a Senior Software Engineer for the last 3
                  years at a leading IT enabled business company known as
                  HUSSAINS™ Business Consultants Limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {tab == 4 && (
        <div className='mt-5'>
          <div className='px-5 py-6 mt-5 bg-slate-50 rounded-md shadow-md'>
            <div className='flex h-[inherit] gap-6'>
              <div className='shrink-0 flex flex-col justify-center items-center gap-2'>
                <PiStudentLight className='shrink-0 text-3xl text-orange-500' />
                <div className='w-[2px] h-full bg-orange-500' />
              </div>
              <div>
                <h3 className='text-xl font-bold tracking-tight text-slate-800 dark:text-white'>
                  BSC in CSE (BUBT)
                </h3>
                <h5 className='font-bold text-sm mb-2 text-gray-500'>
                  - Upwork (Freeluncher)
                </h5>
                <span className='inline-flex items-center gap-1 py-1 rounded-full text-xs font-semibold whitespace-nowrap px-2 focus:outline-none focus:ring-2 bg-orange-50 text-orange-600 ring-1 ring-orange-500'>
                  January 2019 - Running
                </span>
                <p className='text-slate-500 leading-7 mt-5'>
                  A Passionate Software Developer, Entrepreneur and Programmer.
                  I love to play with coding, building software, and focusing on
                  learning new technologies. Currently I am running a well known
                  software company called Triangle Technologies Limited. Also, I
                  have been working as a Senior Software Engineer for the last 3
                  years at a leading IT enabled business company known as
                  HUSSAINS™ Business Consultants Limited.
                </p>
              </div>
            </div>
          </div>

          <div className='px-5 py-6 mt-5 bg-slate-50 rounded-md shadow-md'>
            <div className='flex h-[inherit] gap-6'>
              <div className='shrink-0 flex flex-col justify-center items-center gap-2'>
                <PiStudentLight className='shrink-0 text-3xl text-orange-500' />
                <div className='w-[2px] h-full bg-orange-500' />
              </div>
              <div>
                <h3 className='text-xl font-bold tracking-tight text-slate-800 dark:text-white'>
                  Diploma in CSE
                </h3>
                <h5 className='font-bold text-sm mb-2 text-gray-500'>
                  - City Polytechnic Institute (khulna)
                </h5>
                <span className='inline-flex items-center gap-1 py-1 rounded-full text-xs font-semibold whitespace-nowrap px-2 focus:outline-none focus:ring-2 bg-orange-50 text-orange-600 ring-1 ring-orange-500'>
                  January 2019 - Running
                </span>
                <p className='text-slate-500 leading-7 mt-5'>
                  A Passionate Software Developer, Entrepreneur and Programmer.
                  I love to play with coding, building software, and focusing on
                  learning new technologies. Currently I am running a well known
                  software company called Triangle Technologies Limited. Also, I
                  have been working as a Senior Software Engineer for the last 3
                  years at a leading IT enabled business company known as
                  HUSSAINS™ Business Consultants Limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tab;
