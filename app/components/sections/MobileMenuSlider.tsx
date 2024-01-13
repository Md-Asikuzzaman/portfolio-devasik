import { NextPage } from 'next';
import SocialLink from '@/app/components/shared/SocialLink';

import { appVersion, navOptions } from '@/lib';

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
  const handleClick = (option: string) => {
    setNavOptionActive(option);
    setMenuActive((value) => !value);
  };

  return (
    <div
      className={`fixed md:hidden top-[64px] bg-[#0D1224]/90 backdrop-blur-xl h-screen w-full left-0 px-8 py-5 transform duration-500 ${
        menuActive ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className='flex flex-col gap-5'>
        {navOptions.map((option, i) => (
          <li key={i} onClick={() => handleClick(option)}>
            <a
              className={`capitalize ${
                option == navOptionActive ? 'text-pink-500' : 'text-gray-400'
              } text-base font-semibold hover:text-pink-500`}
              href={option == navOptionActive ? `#${option}` : '#'}
            >
              {option}
            </a>
          </li>
        ))}
      </ul>

      <SocialLink variant='mobile' />
      <span className='text-sm text-slate-500 absolute left-0 right-0 text-center bottom-[15%]'>{appVersion}</span>
    </div>
  );
};

export default MobileMenuSlider;
