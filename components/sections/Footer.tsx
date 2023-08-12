'use client';

import React from 'react';
import GoToTop from '../GoToTop';

const Footer = () => {
  return (
    <footer className='flex items-center justify-center bg-black/90 pb-5'>
      <p className='text-sm text-center text-gray-300 bg-[#3C2410] py-2 px-4 rounded-full'>
        &copy; {new Date().getFullYear()} All rights reserved by dev asik.
      </p>

      {/* go to top button */}
      <GoToTop />
    </footer>
  );
};

export default Footer;
