import { NextPage } from 'next';

interface Props {
  children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
