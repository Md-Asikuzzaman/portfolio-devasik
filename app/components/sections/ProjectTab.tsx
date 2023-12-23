import { NextPage } from 'next';
import { useEffect, useState, Suspense } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useInView } from 'react-intersection-observer';
import Project from '../Project';

const ProjectTab: NextPage = async () => {
  const res = await fetch('https://devasik.vercel.app/api/project', {
    cache: 'no-cache',
  });

  const projects = await res.json();

  // const { ref, inView } = useInView({
  //   threshold: 0.3,
  // });

  // const { setActiveSection } = useActiveSection();

  // useEffect(() => {
  //   if (inView) {
  //     setActiveSection('works');
  //   }
  // }, [inView, setActiveSection]);

  return (
    <section id='works' className='relative overflow-hidden pb-16'>
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

        <Suspense fallback={<div className='bg-red-500 p-12'>Loading...</div>}>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8'>
            {projects.map((project: any) => (
              <Project
                key={project.id}
                id={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                website={project.website}
                github={project.github}
              />
            ))}
          </div>
        </Suspense>

        <div className='flex justify-center pt-10'>
          <button className='gradient-btn'>Load More</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectTab;
