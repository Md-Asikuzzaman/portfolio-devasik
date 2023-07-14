import About from '@/components/sections/about';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import Project from '@/components/sections/works';
import Testimonial from '@/components/sections/testimonial';
import { NextPage, Metadata } from 'next';
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
