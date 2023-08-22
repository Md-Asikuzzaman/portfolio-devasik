'use client';

import { NextPage } from 'next';
import { usePathname } from 'next/navigation';

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const pathname = usePathname();

  console.log(pathname);
  return <div>add a new project</div>;
};

export default Page;
