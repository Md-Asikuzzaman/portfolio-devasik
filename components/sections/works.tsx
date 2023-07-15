'use client';

import { NextPage } from 'next';
import Work from '../project';
import Filter from '../filter';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    category: 'tools',
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

const Works: NextPage = () => {
  const [project, setProject] = useState(data);
  const [filtered, setFiltered] = useState(data);
  const [activeButton, setActiveButton] = useState('all');

  return (
    <section id='works' className='py-14 dark:bg-gray-900'>
      <div className='container'>
        <h2 className='text-4xl text-center font-bold text-gray-900 mb-10 dark:text-white'>
          Recent Works
        </h2>
        <Filter
          project={project}
          setFiltered={setFiltered}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <motion.div
          layout
          className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-10'
        >
          <AnimatePresence>
            {filtered.map((project) => (
              <Work
                key={project.id}
                id={project.id}
                photo={project.photo}
                title={project.title}
                details={project.details}
                links={project.links}
                category={project.category}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
