import About from '@/components/sections/About';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Project from '@/components/sections/ProjectTab';
import Testimonial from '@/components/sections/Testimonial';
import { NextPage, Metadata } from 'next';
import Providers from '@/components/Providers';

interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Testimonial />
      <Project />
    </>
  );
};

export default Home;
