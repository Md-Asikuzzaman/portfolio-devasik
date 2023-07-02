import { NextPage } from 'next';
import { TbCodeDots } from 'react-icons/tb';
import NavOption from '../navOption';

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <header className='bg-[#F9FBFC]'>
      <nav className='header__container h-20 flex items-center justify-between'>
        <a className='flex items-center gap-1 text-xl' href={'#'}>
          <TbCodeDots className='text-3xl' /> dev asik
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
              href='#'
            >
              About
            </a>
          </li>
          <li>
            <a
              className='text-base font-medium text-slate-800  hover:text-orange-500'
              href='#'
            >
              Services
            </a>
          </li>
          <li>
            <a
              className='text-base font-medium text-slate-800  hover:text-orange-500'
              href='#'
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
