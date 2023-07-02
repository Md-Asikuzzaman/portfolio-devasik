'use client';

import { useState } from 'react';

const Tab = () => {
  const [tab, setTab] = useState(1);

  const handleTab = (id: any) => {
    setTab(id);
  };
  return (
    <div className='col-start-2 col-end-4'>
      <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
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
        <div className='p-4'>
          <p>Hi, This is Md Asikuzzaman</p>
          <p>
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
      {tab == 2 && <div className='p-4'>tab 2</div>}
      {tab == 3 && <div className='p-4'>tab 3</div>}
      {tab == 4 && <div className='p-4'>tab 4</div>}
    </div>
  );
};

export default Tab;
