import { NextPage } from 'next';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Testimonial from './components/sections/Testimonial';
import ProjectTab from './components/sections/ProjectTab';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Testimonial />
      <ProjectTab />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
