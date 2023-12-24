'use client';

import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useInView } from 'react-intersection-observer';
import Project from '../Project';
import axios from 'axios';

import { LuLoader2 } from 'react-icons/lu';

interface ProjectDataType {
  id: string;
  title: string;
  description: string;
  image: string;
  website: string;
  github: string;
  variant: string;
}

interface serverDataType {
  project: ProjectDataType[];
  hasMorePages: boolean;
}

const ProjectTab: NextPage = () => {
  const [data, setData] = useState<serverDataType>();
  const [project, setProject] = useState<ProjectDataType[]>([]);
  const [isLoading, setLoading] = useState(true);

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://devasik.vercel.app/api/project?page=${page}`
        );
        const project = await res.data;
        setData(project);

        if (page == 1) {
          setProject(project.project);
        } else {
          setProject((prevState) => [...prevState, ...project.project]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

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
          {project.length > 0 ? (
            project.map((project: any) => (
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
          ) : (
            <>
              <div className='border border-[#262B42] shadow rounded-md p-4 max-w-lg w-full mx-auto'>
                <div className='animate-pulse flex flex-col'>
                  <div className='rounded-lg bg-slate-700 mb-4 h-28 w-full'></div>
                  <div className='flex-1 space-y-6 py-1'>
                    <div className='h-2 bg-slate-700 rounded'></div>
                    <div className='space-y-5'>
                      <div className='h-2 bg-slate-700 rounded'></div>
                      <div className='flex justify-center gap-3'>
                        <div className='h-8 w-8 bg-slate-700 rounded-full'></div>
                        <div className='h-8 w-8 bg-slate-700 rounded-full'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='border border-[#262B42] shadow rounded-md p-4 max-w-lg w-full mx-auto'>
                <div className='animate-pulse flex flex-col'>
                  <div className='rounded-lg bg-slate-700 mb-4 h-28 w-full'></div>
                  <div className='flex-1 space-y-6 py-1'>
                    <div className='h-2 bg-slate-700 rounded'></div>
                    <div className='space-y-5'>
                      <div className='h-2 bg-slate-700 rounded'></div>
                      <div className='flex justify-center gap-3'>
                        <div className='h-8 w-8 bg-slate-700 rounded-full'></div>
                        <div className='h-8 w-8 bg-slate-700 rounded-full'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='border border-[#262B42] shadow rounded-md p-4 max-w-lg w-full mx-auto'>
                <div className='animate-pulse flex flex-col'>
                  <div className='rounded-lg bg-slate-700 mb-4 h-28 w-full'></div>
                  <div className='flex-1 space-y-6 py-1'>
                    <div className='h-2 bg-slate-700 rounded'></div>
                    <div className='space-y-5'>
                      <div className='h-2 bg-slate-700 rounded'></div>
                      <div className='flex justify-center gap-3'>
                        <div className='h-8 w-8 bg-slate-700 rounded-full'></div>
                        <div className='h-8 w-8 bg-slate-700 rounded-full'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {data?.hasMorePages && project.length > 0 && (
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

export default ProjectTab;
