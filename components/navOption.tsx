import { BiSun, BiLogoGithub } from 'react-icons/bi';
import { BsMoonStars } from 'react-icons/bs';

const NavOption = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className='flex gap-8'>
      {children}
      <div className='w-[1px] h-auto bg-slate-200' />
      <div className='flex items-center gap-5'>
        <div className=''>
          <BiSun className='w-6 h-6 mode--active' />
          {/* <BsMoonStars className='w-6 h-6' /> */}
        </div>
        <a href='https://www.face.com'>
          <BiLogoGithub className='w-6 h-6 text-slate-400 hover:text-slate-500' />
        </a>
      </div>
    </ul>
  );
};

export default NavOption;
