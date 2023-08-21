import { Suspense } from 'react';
import { Metadata } from 'next';
import './globals.css';
import ActiveSectionContextProvider from '@/context/activeSectionContext';
import Loading from './components/Loading';

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
        <Suspense fallback={<Loading />}>
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
