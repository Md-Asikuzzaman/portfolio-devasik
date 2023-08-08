'use client';

import { HiPhoneArrowDownLeft } from 'react-icons/hi2';
import { FaLocationDot } from 'react-icons/fa6';
import { SiMinutemailer } from 'react-icons/si';

const Contact = () => {
  return (
    <section id='about' className='py-14 bg-black/90'>
      <div className='container'>
        <h2 className='text-4xl text-center font-bold text-white mb-10'>
          Contact Me
        </h2>
        <div className='grid md:grid-cols-3 gap-3 md:gap-5'>
          <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md p-[2px]'>
            <div className='bg-black rounded-md py-6 text-center h-full overflow-hidden'>
              <div className='h-14 w-14 rounded-full bg-[#3c2410] inline-flex items-center justify-center text-orange-500'>
                <HiPhoneArrowDownLeft size={20} />
              </div>
              <h3 className='text-white text-lg pt-3 py-2'>Call me Today</h3>
              <h4 className='text-white'>
                WhatsApp:
                <a
                  className='text-[#888888] hover:text-gray-300 hover:underline ml-1'
                  href='#'
                >
                  +8801995-580559
                </a>
              </h4>
            </div>
          </div>

          <div className='bg-gradient-to-r from-pink-500 via-pink-500 to-pink-500 rounded-md p-[2px]'>
            <div className='bg-black rounded-md py-6 text-center h-full overflow-hidden'>
              <div className='h-14 w-14 rounded-full bg-[#3c2410] inline-flex items-center justify-center text-orange-500'>
                <SiMinutemailer size={25} />
              </div>
              <h3 className='text-white text-lg pt-3 py-2'>Send me Email</h3>
              <h4 className='text-white'>
                Email:
                <a
                  className='text-[#888888] hover:text-gray-300 hover:underline ml-1'
                  href='#'
                >
                  mdasikuzzaman.en@gmail.com
                </a>
              </h4>
            </div>
          </div>

          <div className='bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-md p-[2px]'>
            <div className='bg-black rounded-md py-6 text-center h-full overflow-hidden'>
              <div className='h-14 w-14 rounded-full bg-[#3c2410] inline-flex items-center justify-center text-orange-500'>
                <FaLocationDot size={20} />
              </div>
              <h3 className='text-white text-lg pt-3 py-2'>My Location</h3>
              <h4 className='text-white'>Khulna, Bangladesh</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
