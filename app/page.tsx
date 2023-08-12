import { NextPage } from 'next';

import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Project from '@/components/sections/ProjectTab';
import Testimonial from '@/components/sections/Testimonial';
import Footer from '@/components/sections/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Testimonial />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
