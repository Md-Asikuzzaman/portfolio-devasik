'use client';

import { useState, useCallback, useEffect } from 'react';
import MyInput from '@/app/components/Input';
import axios from 'axios';
import { toast } from 'react-toastify';
import useProject from '@/hooks/useProject';
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';

  
interface Props {
  params: { id: string };
}

const Page: NextPage<Props> = ({ params }) => {
  const { id } = params;

  const { data, mutate, error, isLoading } = useProject(id ? id : '');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [website, setWebsite] = useState('');
  const [github, setGithub] = useState('');
  const [variant, setVariant] = useState('');

  const router = useRouter();

  useEffect(() => {
    if (error) {
      router.replace('/dashboard');
    } else {
      if (data) {
        setTitle(data.title);
        setDescription(data.description);
        setImage(data.image);
        setWebsite(data.website);
        setGithub(data.github);
        setVariant(data.variant);
      }
    }
  }, [data, error, router]);

  const reset = () => {
    setTitle('');
    setDescription('');
    setImage('');
    setWebsite('');
    setGithub('');
    setVariant('');
  };

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();

      const data = {
        title,
        description,
        image,
        website,
        github,
        variant,
      };

      const res = await axios.put(`/api/projects/update/${id}`, data);

      reset();

      if (res.status === 200) {
        toast.success('Project updated!!!');
        mutate();
        setTimeout(() => {
          router.replace('/dashboard');
        }, 200);
      }
    },
    [title, description, image, website, github, variant, mutate, id, router]
  );

  return (
    <div className='flex items-start justify-center min-h-screen w-full md:mt-12'>
      <form
        onSubmit={handleSubmit}
        className='bg-white max-w-2xl w-full p-12 rounded-2xl shadow-lg'
      >
        <h2 className='text-xl md:text-2xl font-semibold mb-4'>
          Update Project
        </h2>
        <MyInput
          variant='bw'
          label='Title'
          id='title'
          value={title}
          data={setTitle}
        />
        <MyInput
          variant='bw'
          label='Description'
          id='description'
          value={description}
          data={setDescription}
        />
        <MyInput
          variant='bw'
          label='Image link'
          id='image'
          value={image}
          data={setImage}
        />
        <MyInput
          variant='bw'
          label='Site link'
          id='site'
          value={website}
          data={setWebsite}
        />
        <MyInput
          variant='bw'
          label='Github link'
          id='github'
          value={github}
          data={setGithub}
        />
        <MyInput
          variant='bw'
          label='Variant'
          id='variant'
          value={variant}
          data={setVariant}
        />
        <button
          className='w-full py-3 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 mt-4 transition'
          type='submit'
        >
          Let's Modify
        </button>
      </form>
    </div>
  );
};

export default Page;
