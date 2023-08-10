import { NextPage } from 'next';

interface Props {
  handleMobileMenu: () => void;
  setNavOptionActive: any;
  menuActive: boolean;
  navOptionActive: string;
}

const MobileMenuSlider: NextPage<Props> = ({
  handleMobileMenu,
  menuActive,
  navOptionActive,
  setNavOptionActive,
}) => {
  return (
    <div
      className={`fixed top-[81px] bg-black h-screen w-full left-0 px-14 py-5 transform duration-500 ${
        menuActive ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className='flex flex-col gap-8'>
        <li
          onClick={() => {
            setNavOptionActive('home');
          }}
        >
          <a
            className={`${
              navOptionActive == 'home' ? 'text-orange-500' : 'text-[#888888]'
            } text-base hover:text-orange-500`}
            href='#'
          >
            Home
          </a>
        </li>
        <li onClick={() => setNavOptionActive('about')}>
          <a
            className={`${
              navOptionActive == 'about' ? 'text-orange-500' : 'text-[#888888]'
            } text-base hover:text-orange-500`}
            href='#about'
          >
            About
          </a>
        </li>
        <li onClick={() => setNavOptionActive('works')}>
          <a
            className={`${
              navOptionActive == 'works' ? 'text-orange-500' : 'text-[#888888]'
            } text-base hover:text-orange-500`}
            href='#works'
          >
            Works
          </a>
        </li>
        <li onClick={() => setNavOptionActive('contact')}>
          <a
            className={`${
              navOptionActive == 'contact'
                ? 'text-orange-500'
                : 'text-[#888888]'
            } text-base hover:text-orange-500`}
            href='#contact'
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenuSlider;
