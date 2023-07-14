import { NextPage } from 'next';
import { TbCodeDots } from 'react-icons/tb';
import NavOption from '../navOption';

const Header: NextPage = () => {
  return (
    <header className='sticky top-0 bg-[#f9fbfc85] z-50 backdrop-blur-md'>
      <nav className='header__container h-20 flex items-center justify-between'>
        <a className='flex items-center gap-1 text-xl' href={'#'}>
          <TbCodeDots className='text-3xl text-orange-500' /> dev asik
        </a>
        <NavOption>
          <li>
            <a
              className='text-base font-medium text-slate-800  hover:text-orange-500'
              href='#'
            >
              Home
            </a>
          </li>
          <li>
            <a
              className='text-base font-medium text-slate-800  hover:text-orange-500'
              href='#about'
            >
              About
            </a>
          </li>
          <li>
            <a
              className='text-base font-medium text-slate-800  hover:text-orange-500'
              href='#works'
            >
              Works
            </a>
          </li>
          <li>
            <a
              className='text-base font-medium text-slate-800 hover:text-orange-500'
              href='#'
            >
              Contact
            </a>
          </li>
        </NavOption>
      </nav>
    </header>
  );
};

export default Header;
