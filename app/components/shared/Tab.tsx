'use client';

import { useState } from 'react';

import AboutMe from './tab-options/AboutMe';
import Skill from './tab-options/Skill';
import Experience from './tab-options/Experience';
import Education from './tab-options/Education';

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
      {tab == 1 && <AboutMe />}
      {tab == 2 && <Skill />}
      {tab == 3 && <Experience />}
      {tab == 4 && <Education />}
    </div>
  );
};

export default Tab;
