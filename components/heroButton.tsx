import React from 'react';

const HeroButton = () => {
  return (
    <div className=''>
      <a
        href='#works'
        type='button'
        className='focus:outline-none text-white duration-200 bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-orange-600 dark:hover:bg-orange-600 dark:focus:ring-orange-700'
      >
        Explore My Works
      </a>
    </div>
  );
};

export default HeroButton;
