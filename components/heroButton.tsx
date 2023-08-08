import React from 'react';

const HeroButton = () => {
  return (
    <a href='#works' type='button'>
      <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-[2px]'>
        <div className='bg-black/80 hover:bg-black/90 transition py-3 px-7 rounded-md text-white'>
          Explore My Works
        </div>
      </div>
    </a>
  );
};

export default HeroButton;
