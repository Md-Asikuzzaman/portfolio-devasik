import { Metadata } from 'next';
import ActiveSectionContextProvider from '@/context/activeSectionContext';
import SessionProviders from '../components/SessionProviders';

import './globals.css';

export const metadata: Metadata = {
  title:
    'Md Asikuzzaman | MERN Stack Web Developer - such as (MongoDB, Express, React & Next, Node)',
  description: 'something',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='scroll-pt-10 md:scroll-pt-8 scroll-smooth' lang='en'>
      <body suppressHydrationWarning={true}>
        <ActiveSectionContextProvider>
          <SessionProviders>{children}</SessionProviders>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
