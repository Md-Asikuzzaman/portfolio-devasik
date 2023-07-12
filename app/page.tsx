import About from '@/components/sections/about';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import { NextPage, Metadata } from 'next';
interface Props {}

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
    </>
  );
};

export default Home;
