'use client';

import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi';
import Slider from 'react-slick';

export default function SimpleSlider() {
  const NextArrow = (props: any) => {
    const { onClick } = props;

    return (
      <div
        className='absolute transform translate-y-12 translate-x-10 h-9 w-9 bottom-0 left-0 right-0 m-auto bg-violet-500/20 inline-flex items-center justify-center text-sm p-2 rounded-full text-white cursor-pointer'
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };

  const PrevArrow = (props: any) => {
    const { onClick } = props;

    return (
      <div
        className='absolute transform translate-y-12 -translate-x-10 h-9 w-9 bottom-0 left-0 right-0 m-auto bg-violet-500/20 inline-flex items-center justify-center text-sm p-2 rounded-full text-white cursor-pointer'
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='container relative py-14'>
      <Slider {...settings}>
        <div>
          <div className='bg-violet-500 p-5 m-3'>
            <h3>1</h3>
          </div>
        </div>

        <div>
          <div className='bg-red-500 p-5 m-3'>
            <h3>1</h3>
          </div>
        </div>

        <div>
          <div className='bg-green-500 p-5 m-3'>
            <h3>1</h3>
          </div>
        </div>

        <div>
          <div className='bg-green-500 p-5 m-3'>
            <h3>1</h3>
          </div>
        </div>

        <div>
          <div className='bg-green-500 p-5 m-3'>
            <h3>1</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}
