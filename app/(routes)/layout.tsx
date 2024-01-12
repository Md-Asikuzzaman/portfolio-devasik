import { NextPage } from 'next';
import Header from '@/app/components/sections/Header';
import Footer from '@/app/components/sections/Footer';

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
