'use client';

import useProject from '@/hooks/useProjects';
import axios from 'axios';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const { data, isLoading, mutate } = useProject();

  useEffect(() => {
    mutate();
  }, [mutate]);

  const handleClick = useCallback(
    async (id: string) => {
      if (window.confirm('Do you really want to delete?')) {
        const res = await axios.delete(`/api/projects/delete/${id}`);

        if (res.status === 200) {
          toast.error('Project deleted!!!');
        }

        mutate();
      }
    },
    [mutate]
  );

  return (
    <div>
      <h2 className='text-xl md:text-2xl font-semibold mb-4'>All Projects</h2>
      <div className='flex flex-col gap-3'>
        <div className='relative overflow-x-scroll shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  Title
                </th>
                <th scope='col' className='px-6 py-3'>
                  Description
                </th>
                <th scope='col' className='px-6 py-3'>
                  variant
                </th>
                <th scope='col' className='px-6 py-3'>
                  Image
                </th>
                <th scope='col' className='px-6 py-3'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr className='bg-white border-b  hover:bg-gray-50'>
                  <td className='px-6 py-4 text-center' colSpan={5}>
                    Loading...
                  </td>
                </tr>
              ) : (
                data?.map((project) => (
                  <tr
                    key={project.id}
                    className='bg-white border-b  hover:bg-gray-50'
                  >
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
                    >
                      {project.title}
                    </th>
                    <td className='px-6 py-4'>
                      {project.description.slice(0, 20)}
                    </td>
                    <td className='px-6 py-4'>{project.variant}</td>

                    <td className='p-2'>
                      <Image
                        height={20}
                        width={80}
                        className='bg-cover bg-center'
                        src={project.image}
                        alt='cover'
                      />
                    </td>
                    <td className='px-6 py-4 flex items-center gap-4'>
                      <Link
                        href={`/dashboard/update/${project.id}`}
                        className='flex items-center gap-1 font-medium text-blue-600 hover:underline'
                      >
                        Edit
                        <AiFillEdit size={18} />
                      </Link>

                      <button
                        onClick={() => handleClick(project.id)}
                        className='flex items-center gap-1 font-medium text-rose-600 hover:underline'
                      >
                        Delete
                        <AiFillDelete size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
