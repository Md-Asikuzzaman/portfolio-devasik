'use client';

import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';
import { useActiveSection } from '@/hooks/useActiveSection';

import Project from '@/app/components/shared/Project';
import { LuLoader2 } from 'react-icons/lu';

import axios from 'axios';
import ProjectSkeleton from '../shared/skeleton/ProjectSkeleton';
import { useQuery } from '@tanstack/react-query';

const Projects: NextPage = () => {
  const [serverData, setServerData] = useState<ServerResponseType>();
  const [clientData, setClientData] = useState<ProjectType[]>([]);
  const [page, setPage] = useState<number>(1);

  const { isLoading } = useQuery<ServerResponseType>({
    queryKey: ['fetch_projects', page],
    queryFn: async () => {
      const res = await axios.get(`/api/infinite-projects?page=${page}`, {
        baseURL: process.env.NEXTAUTH_URL,
      });

      setServerData(res.data);

      if (page == 1) {
        setClientData(res?.data?.projects);
      } else {
        setClientData((prevState) => [...prevState, ...res?.data?.projects]);
      }

      return res.data;
    },
  });

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection('works');
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id='works' className='relative overflow-hidden pb-16'>
      <div className='relative -z-50 pt-14'>
        <div className='flex flex-row justify-center'>
          <div className='absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#262B42] to-transparent'></div>
          <div className='w-[300px] h-[300px] bg-violet-500/80 rounded-full absolute -top-[150px] filter blur-3xl  opacity-20'></div>
        </div>
      </div>
      <div className='container'>
        <h2 className='text-2xl md:text-3xl text-center font-bold text-white mb-10'>
          Recent Works
        </h2>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
          {clientData.length > 0
            ? clientData.map((project: any) => (
                <Project
                  key={project.id}
                  id={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  website={project.website}
                  github={project.github}
                />
              ))
            : [0, 1, 2].map((_i, i) => <ProjectSkeleton key={i} />)}
        </div>

        {serverData?.hasMorePages && (
          <div className='flex justify-center pt-10'>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className='gradient-btn flex items-center gap-1'
            >
              {isLoading && <LuLoader2 className='animate-spin' size={20} />}
              {isLoading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
