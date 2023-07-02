import React from 'react';

const HeroButton = () => {
  return (
    <div className='flex gap-5'>
      <a
        href='#'
        type='button'
        className='focus:outline-none text-white duration-200 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-700'
      >
        Explore My Works
      </a>
      <a
        href='#'
        type='button'
        className='text-gray-900 bg-white duration-200 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
      >
        About Me
      </a>
    </div>
  );
};

export default HeroButton;
