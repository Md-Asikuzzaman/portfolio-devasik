import { useCallback, useState } from 'react';

const MobileMenu = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMobileMenu = useCallback(() => {
    console.log('click');
  }, []);

  return (
    <button type='button' onClick={handleMobileMenu}>
      <div className='text-white flex items-center justify-center md:hidden relative h-[36px] w-[36px] border border-white'>
        <span
          className={`h-[1.5px] w-[22px] bg-white inline-flex absolute transform translate-y-[-4px]`}
        ></span>
        <span
          className={`h-[1.5px] w-[22px] bg-white inline-flex absolute transform translate-y-[4px]`}
        ></span>
      </div>
    </button>
  );
};

export default MobileMenu;
