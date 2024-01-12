import { Metadata } from 'next';
import ActiveSectionContextProvider from '@/context/activeSectionContext';
import SessionProviders from '@/app/components/providers/SessionProviders';
import './globals.css';

import 'slick-carousel/slick/slick.css';

export const metadata: Metadata = {
  title:
    'Md Asikuzzaman | MERN Stack Web Developer - such as (MongoDB, Express, React & Next, Node)',
  description: 'something',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/images/dev.jpg',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='scroll-pt-10 md:scroll-pt-8 scroll-smooth' lang='en'>
      <body suppressHydrationWarning={true}>
        <SessionProviders>
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </SessionProviders>
      </body>
    </html>
  );
}
