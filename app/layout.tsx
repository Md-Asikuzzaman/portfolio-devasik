import { Metadata } from 'next';
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
    <html className='scroll-pt-7 scroll-smooth' lang='en'>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
