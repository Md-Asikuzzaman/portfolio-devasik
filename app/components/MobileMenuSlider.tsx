import { NextPage } from 'next';
import SocialLink from './SocialLink';

interface Props {
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  setNavOptionActive: React.Dispatch<React.SetStateAction<string>>;
  menuActive: boolean;
  navOptionActive: string;
}

const MobileMenuSlider: NextPage<Props> = ({
  setMenuActive,
  menuActive,
  navOptionActive,
  setNavOptionActive,
}) => {
  return (
    <div
      className={`fixed md:hidden top-[64px] bg-[#0D1224]/90 backdrop-blur-xl h-screen w-full left-0 px-8 py-5 transform duration-500 ${
        menuActive ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className='flex flex-col gap-5'>
        <li
          onClick={() => {
            setNavOptionActive('home');
            setMenuActive((value) => !value);
          }}
        >
          <a
            className={`${
              navOptionActive == 'home' ? 'text-pink-500' : 'text-gray-400'
            } text-base font-semibold hover:text-pink-500`}
            href='#'
          >
            Home
          </a>
        </li>
        <li
          onClick={() => {
            setNavOptionActive('about');
            setMenuActive((value) => !value);
          }}
        >
          <a
            className={`${
              navOptionActive == 'about' ? 'text-pink-500' : 'text-gray-400'
            } text-base font-semibold hover:text-pink-500`}
            href='#about'
          >
            About
          </a>
        </li>
        <li
          onClick={() => {
            setNavOptionActive('works');
            setMenuActive((value) => !value);
          }}
        >
          <a
            className={`${
              navOptionActive == 'works' ? 'text-pink-500' : 'text-gray-400'
            } text-base font-semibold hover:text-pink-500`}
            href='#works'
          >
            Works
          </a>
        </li>
        <li
          onClick={() => {
            setNavOptionActive('contact');
            setMenuActive((value) => !value);
          }}
        >
          <a
            className={`${
              navOptionActive == 'contact'
                ? 'text-pink-500'
                : 'text-gray-400'
            } text-base font-semibold hover:text-pink-500`}
            href='#contact'
          >
            Contact
          </a>
        </li>
      </ul>

      <SocialLink variant='mobile' />
    </div>
  );
};

export default MobileMenuSlider;
