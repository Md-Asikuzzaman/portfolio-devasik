'use client';

import { NextPage } from 'next';
import Link from 'next/link';

import {
  MdMoreHoriz,
  MdOutlineSettings,
  MdOutlineSpaceDashboard,
} from 'react-icons/md';

import { AiOutlineEdit, AiOutlineLogout } from 'react-icons/ai';
import { BsDatabaseAdd } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className='flex bg-zinc-200 w-full h-screen rounded-md'>
      {/* sidebar */}

      <div className='bg-white m-6 p-4 rounded-md max-w-[80px] md:max-w-xs w-full shrink-0 flex flex-col gap-10'>
        <div className='flex flex-col gap-1'>
          <Link
            className={`flex items-center justify-center md:justify-start gap-4 hover:bg-black hover:bg-opacity-90 p-3 text-black hover:text-white rounded-md transition ${
              pathname === '/dashboard' && 'bg-black text-white bg-opacity-90'
            }`}
            href='/dashboard'
          >
            <MdOutlineSpaceDashboard size={20} />
            <span className='hidden md:flex'>Dashboard</span>
          </Link>

          <Link
            className={`flex items-center justify-center md:justify-start gap-4 hover:bg-black hover:bg-opacity-90 p-3 text-black hover:text-white rounded-md transition ${
              pathname === '/dashboard/add' &&
              'bg-black text-white bg-opacity-90'
            }`}
            href='/dashboard/add'
          >
            <BsDatabaseAdd size={20} />
            <span className='hidden md:flex'>Add Project</span>
          </Link>

          <Link
            className={`flex items-center justify-center md:justify-start gap-4 hover:bg-black hover:bg-opacity-90 p-3 text-black hover:text-white rounded-md transition ${
              pathname === '/dashboard/update' &&
              'bg-black text-white bg-opacity-90'
            }`}
            href='/dashboard/update'
          >
            <AiOutlineEdit size={20} />
            <span className='hidden md:flex'>Update Project</span>
          </Link>
        </div>

        {/*  */}

        <div className='flex flex-col gap-1'>
          <Link
            className={`flex items-center justify-center md:justify-start gap-4 hover:bg-black hover:bg-opacity-90 p-3 text-black hover:text-white rounded-md transition ${
              pathname === '/dashboard/settings' &&
              'bg-black text-white bg-opacity-90'
            }`}
            href='/dashboard/settings'
          >
            <MdOutlineSettings size={20} />
            <span className='hidden md:flex'>Settings</span>
          </Link>

          <Link
            className='flex items-center justify-center md:justify-start gap-4 hover:bg-black bg-opacity-80 p-3 text-black hover:text-white rounded-md transition'
            href='/dashboard'
          >
            <MdMoreHoriz size={20} />
            <span className='hidden md:flex'>More</span>
          </Link>
        </div>

        {/*  */}
        <div className='flex flex-col gap-1 mt-auto'>
          <Link
            onClick={() => signOut()}
            className='flex justify-center md:justify-start items-center gap-4 border hover:border-rose-500 bg-opacity-80 p-3 text-black hover:text-rose-500 rounded-md transition'
            href='/dashboard'
          >
            <AiOutlineLogout />
            <span className='hidden md:flex'>Logout</span>
          </Link>
        </div>
      </div>

      {/* main container */}
      <div className='my-10 mx-4'>{children}</div>
    </div>
  );
};

export default Layout;
