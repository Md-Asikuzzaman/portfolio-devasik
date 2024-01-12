import {
  BiLogoHtml5,
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoSass,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoPostgresql,
} from 'react-icons/bi';

import { TbBrandNextjs, TbBrandMysql } from 'react-icons/tb';
import {
  SiExpress,
  SiBootstrap,
  SiRedux,
  SiPrisma,
  SiReactquery,
} from 'react-icons/si';
import { FaNpm, FaYarn, FaDocker } from 'react-icons/fa';

import Technology from '@/app/components/shared/Technology';

const Skill = () => {
  return (
    <div className='flex flex-wrap gap-3 md:gap-4'>
      <Technology
        title='HTML5'
        Icon={BiLogoHtml5}
        color='text-orange-500'
        ringColor='ring-orange-500'
      />
      <Technology
        title='CSS3'
        Icon={BiLogoCss3}
        color='text-sky-500'
        ringColor='ring-sky-500'
      />
      <Technology
        title='Sass'
        Icon={BiLogoSass}
        color='text-rose-600'
        ringColor='ring-rose-600'
      />
      <Technology
        title='Tailwind Css'
        Icon={BiLogoTailwindCss}
        color='text-sky-500'
        ringColor='ring-sky-500'
      />

      <Technology
        title='Bootstrap'
        Icon={SiBootstrap}
        color='text-violet-600'
        ringColor='ring-violet-600'
      />

      <Technology
        title='JavaScript'
        Icon={BiLogoJavascript}
        color='text-yellow-600'
        ringColor='ring-yellow-600'
      />

      <Technology
        title='TypeScript'
        Icon={BiLogoTypescript}
        color='text-blue-500'
        ringColor='ring-blue-500'
      />

      <Technology
        title='React'
        Icon={BiLogoReact}
        color='text-sky-500'
        ringColor='ring-sky-500'
      />

      <Technology
        title='Next'
        Icon={TbBrandNextjs}
        color='text-gray-400'
        ringColor='ring-gray-400'
      />

      <Technology
        title='Node'
        Icon={BiLogoNodejs}
        color='text-green-500'
        ringColor='ring-green-500'
      />

      <Technology
        title='Express'
        Icon={SiExpress}
        color='text-gray-400'
        ringColor='ring-gray-400'
      />

      <Technology
        title='React-Query'
        Icon={SiReactquery}
        color='text-rose-600'
        ringColor='ring-rose-600'
      />

      <Technology
        title='Redux'
        Icon={SiRedux}
        color='text-violet-500'
        ringColor='ring-violet-500'
      />

      <Technology
        title='Prisma'
        Icon={SiPrisma}
        color='text-gray-400'
        ringColor='ring-gray-400'
      />

      <Technology
        title='My SQL'
        Icon={TbBrandMysql}
        color='text-teal-500'
        ringColor='ring-teal-500'
      />

      <Technology
        title='Postgresql'
        Icon={BiLogoPostgresql}
        color='text-sky-600'
        ringColor='ring-sky-600'
      />

      <Technology
        title='Mongo DB'
        Icon={BiLogoMongodb}
        color='text-green-500'
        ringColor='ring-green-500'
      />

      <Technology
        title='Docker'
        Icon={FaDocker}
        color='text-sky-500'
        ringColor='ring-sky-500'
      />

      <Technology
        title='npm'
        Icon={FaNpm}
        color='text-rose-600'
        ringColor='ring-rose-600'
      />

      <Technology
        title='yarn'
        Icon={FaYarn}
        color='text-sky-600'
        ringColor='ring-sky-600'
      />

      <Technology
        title='Git/Github'
        Icon={BiLogoGit}
        color='text-rose-600'
        ringColor='ring-rose-600'
      />
    </div>
  );
};

export default Skill;
