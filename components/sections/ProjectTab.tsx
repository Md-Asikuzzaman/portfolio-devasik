'use client';

import { NextPage } from 'next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Filter from '../Filter';
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

const ProjectTab: NextPage = () => {
  const [project, setProject] = useState(data);
  const [filtered, setFiltered] = useState(data);
  const [activeButton, setActiveButton] = useState('all');

  return (
    <section id='works' className='py-14 bg-black'>
      <div className='container'>
        <h2 className='text-3xl md:text-4xl text-center font-bold mb-10 text-white'>
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
          className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'
        >
          <AnimatePresence>
            {filtered.map((project) => (
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTab;
