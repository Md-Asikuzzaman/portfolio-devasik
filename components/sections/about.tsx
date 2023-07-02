'use client';

import Tab from '../tab';

const About = () => {
  return (
    <section className='p-10'>
      <div className='container grid grid-cols-3 gap-20'>
        <h1 className='text-5xl'>Hello world</h1>
        <Tab />
      </div>
    </section>
  );
};

export default About;
