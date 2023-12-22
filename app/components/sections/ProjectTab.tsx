'use client';

import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useInView } from 'react-intersection-observer';
import Project from '../Project';

interface DataType {
  id: number;
  photo: string;
  title: string;
  details: string;
  links: string;
  category?: string;
}

const data: DataType[] = [
  {
    id: Math.random() * 10000,
    photo: '/project/dubai.jpg',
    title: 'Project title',
    details:
      'ducimus ullam iure fugiat nam animi harum minima culpa libero. ducimus ullam iure fugiat nam animi harum minima culpa libero.ducimus ullam iure fugiat nam animi harum minima culpa libero.',
    links: 'www.facebook.com',
    category: 'web_app',
  },

  {
    id: Math.random() * 10000,
    photo: '/project/dubai.jpg',
    title: 'Project title',
    details:
      'ducimus ullam iure fugiat nam animi harum minima culpa libero. ducimus ullam iure fugiat nam animi harum minima culpa libero.ducimus ullam iure fugiat nam animi harum minima culpa libero.',
    links: 'www.facebook.com',
    category: 'web_app',
  },

  {
    id: Math.random() * 10000,
    photo: '/project/dubai.jpg',
    title: 'Project title',
    details:
      'ducimus ullam iure fugiat nam animi harum minima culpa libero. ducimus ullam iure fugiat nam animi harum minima culpa libero.ducimus ullam iure fugiat nam animi harum minima culpa libero.',
    links: 'www.facebook.com',
    category: 'web_app',
  },

  {
    id: Math.random() * 10000,
    photo: '/project/dubai.jpg',
    title: 'Project title',
    details:
      'ducimus ullam iure fugiat nam animi harum minima culpa libero. ducimus ullam iure fugiat nam animi harum minima culpa libero.ducimus ullam iure fugiat nam animi harum minima culpa libero.',
    links: 'www.facebook.com',
    category: 'web_app',
  },

  {
    id: Math.random() * 10000,
    photo: '/project/dubai.jpg',
    title: 'Project title',
    details:
      'ducimus ullam iure fugiat nam animi harum minima culpa libero. ducimus ullam iure fugiat nam animi harum minima culpa libero.ducimus ullam iure fugiat nam animi harum minima culpa libero.',
    links: 'www.facebook.com',
    category: 'tools',
  },

  {
    id: Math.random() * 10000,
    photo: '/project/dubai.jpg',
    title: 'Project title',
    details:
      'ducimus ullam iure fugiat nam animi harum minima culpa libero. ducimus ullam iure fugiat nam animi harum minima culpa libero.ducimus ullam iure fugiat nam animi harum minima culpa libero.',
    links: 'www.facebook.com',
    category: 'template',
  },
];

const ProjectTab: NextPage = () => {
  const [projects, setProject] = useState(data);

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
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              photo={project.photo}
              title={project.title}
              details={project.details}
              links={project.links}
              category={project.category}
            />
          ))}
        </div>

        <div className='flex justify-center pt-10'>
          <button className='gradient-btn'>Load More</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectTab;
