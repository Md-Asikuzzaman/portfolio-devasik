import Header from '@/components/sections/header';
import { NextPage, Metadata } from 'next';
interface Props {}

export const metadata: Metadata = {
  title:
    'Md Asikuzzaman | MERN Stack Web Developer - such as (MongoDB, Express, React & Next, Node)',
  description: 'something',
};

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
