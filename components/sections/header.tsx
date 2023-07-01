import { NextPage } from 'next';
import NavOption from '../navOption';
interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <header className='bg-slate-200'>
      <nav className='container h-20 flex items-center justify-between'>
        <a href={'#'}>dev asik</a>
        <NavOption>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Testimonial</li>
          <li>Works</li>
          <li>Contact</li>
        </NavOption>
      </nav>
    </header>
  );
};

export default Header;
