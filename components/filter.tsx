import { NextPage } from 'next';

interface Props {}

const Filter: NextPage<Props> = ({}) => {
  return (
    <div>
      <button
        type='button'
        className='text-orange-500 hover:text-white border border-orange-500 hover:bg-orange-500 duration-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-500'
      >
        All
      </button>

      <button
        type='button'
        className='text-orange-500 hover:text-white border border-orange-500 hover:bg-orange-500 duration-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-500'
      >
        Template
      </button>

      <button
        type='button'
        className='text-orange-500 hover:text-white border border-orange-500 hover:bg-orange-500 duration-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-500'
      >
        Web App
      </button>
      <button
        type='button'
        className='text-orange-500 hover:text-white border border-orange-500 hover:bg-orange-500 duration-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-orange-400 dark:text-orange-400 dark:hover:text-white dark:hover:bg-orange-500'
      >
        Tools
      </button>
    </div>
  );
};

export default Filter;
