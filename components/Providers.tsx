import { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';

interface Props {
  children: React.ReactNode;
}

const Providers: NextPage<Props> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
