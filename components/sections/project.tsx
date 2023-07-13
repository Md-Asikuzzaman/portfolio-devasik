import { NextPage } from 'next';
import Work from '../work';

interface Props {}

const Project: NextPage<Props> = ({}) => {
  return (
    <section className='py-14'>
      <div className='container'>
        <h2 className='text-4xl text-center font-bold text-slate-900 mb-10'>
          Recent Projects
        </h2>

        {/* button will go here */}

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
          <Work />
          <Work />
          <Work />
          <Work />
          <Work />
        </div>
      </div>
    </section>
  );
};

export default Project;
