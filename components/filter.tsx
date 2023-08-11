'use client';

import { NextPage } from 'next';
import { useEffect } from 'react';

interface DataType {
  id: number;
  photo: string;
  title: string;
  details: string;
  links: string;
  category?: string;
}

interface Props {
  project: DataType[];
  setFiltered: any;
  activeButton: any;
  setActiveButton: any;
}

const Filter: NextPage<Props> = ({
  project,
  setFiltered,
  activeButton,
  setActiveButton,
}) => {
  useEffect(() => {
    if (activeButton == 'all') {
      setFiltered(project);
      return;
    }
    const filtered = project.filter((work) => work.category == activeButton);

    setFiltered(filtered);
  }, [activeButton, project, setFiltered]);

  return (
    <div className='text-center mb-6'>
      <button
        type='button'
        className={`${
          activeButton == 'all' && 'filter--active'
        } text-orange-500 bg-[#2d1908] hover:text-white hover:bg-orange-500 duration-200 font-medium rounded-full text-sm px-3 md:px-5 py-2.5 text-center mr-2 mb-2`}
        onClick={() => setActiveButton('all')}
      >
        All
      </button>

      <button
        type='button'
        className={`${
          activeButton == 'template' && 'filter--active'
        } text-orange-500 bg-[#2d1908] hover:text-white hover:bg-orange-500 duration-200 font-medium rounded-full text-sm px-3 md:px-5 py-2.5 text-center mr-2 mb-2`}
        onClick={() => setActiveButton('template')}
      >
        Template
      </button>

      <button
        type='button'
        className={`${
          activeButton == 'web_app' && 'filter--active'
        } text-orange-500 bg-[#2d1908] hover:text-white hover:bg-orange-500 duration-200 font-medium rounded-full text-sm px-3 md:px-5 py-2.5 text-center mr-2 mb-2`}
        onClick={() => setActiveButton('web_app')}
      >
        Web App
      </button>
      <button
        type='button'
        className={`${
          activeButton == 'tools' && 'filter--active'
        } text-orange-500 bg-[#2d1908] hover:text-white hover:bg-orange-500 duration-200 font-medium rounded-full text-sm px-3 md:px-5 py-2.5 text-center mr-2 mb-2`}
        onClick={() => setActiveButton('tools')}
      >
        Tools
      </button>
    </div>
  );
};

export default Filter;
