'use client';

import { NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MyInput from '@/app/components/shared/Input';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.replace('/dashboard');
      return;
    }
  }, [session, router]);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();

      if (email !== '' && password !== '') {
        signIn('credentials', {
          email,
          password,
          callbackUrl: '/dashboard',
        });

        setEmail('');
        setPassword('');
      } else {
        return null;
      }
    },
    [email, password, setEmail, setPassword]
  );

  return (
    <div className="relative h-screen flex items-center justify-center bg-[url('/images/cover.png')] bg-cover bg-no-repeat bg-center px-5">
      <div className='h-screen w-full bg-[rgba(0,0,0,.4)] absolute top-0 left-0 -z-0' />
      <div className='max-w-lg w-full bg-black bg-opacity-40 backdrop-blur-md rounded-lg shrink-0 p-12 z-10'>
        <h3 className='text-2xl md:text-3xl text-white font-semibold'>
          Sign in
        </h3>
        <p className='text-sm md:text-md text-white mt-2 mb-5'>
          Only for admin.
        </p>
        <form onSubmit={handleSubmit}>
          <MyInput
            data={setEmail}
            value={email}
            id='email'
            label='Email Address'
          />
          <MyInput
            data={setPassword}
            value={password}
            type='password'
            id='password'
            label='Password'
          />
          <button
            className='w-full py-3 rounded-md bg-orange-600 text-white hover:bg-orange-700 mt-4 transition'
            type='submit'
          >
            Login
          </button>
          <p className='text-white mt-4'>
            Goto main{' '}
            <Link
              className='text-orange-400 hover:text-orange-500 transition'
              href={'/'}
            >
              site?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
