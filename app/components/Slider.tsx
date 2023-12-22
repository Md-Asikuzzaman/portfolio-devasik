'use client';

import Image from 'next/image';
import Slider from 'react-slick';

import { PiCaretLeftLight, PiCaretRightLight } from 'react-icons/pi';

export default function SimpleSlider() {
  const NextArrow = (props: any) => {
    const { onClick } = props;

    return (
      <div
        className='absolute translate-y-0 lg:translate-x-14 mx-0 bottom-0 right-0 top-0 my-auto h-8 w-8 bg-violet-500 inline-flex items-center justify-center text-sm p-2 rounded-full text-white cursor-pointer'
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
        className='absolute translate-y-0 lg:-translate-x-14 z-20 mx-0 bottom-0 left-0 top-0 my-auto h-8 w-8 bg-violet-500 inline-flex items-center justify-center text-sm p-2 rounded-full text-white cursor-pointer'
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };

  const settings = {
    className: 'center max-w-[650px] lg:max-w-[750px] mx-auto',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    dots: false,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className='container relative py-14 '>
      <div className='my-12 text-center'>
        <p className='font-medium my-4 text-violet-500 text-sm tracking-widest uppercase'>
          Testimonials
        </p>
        <h2 className='text-2xl md:text-3xl text-center font-bold text-white mb-10'>
          What my clients say
        </h2>
      </div>
      <Slider {...settings}>
        <div>
          <div className='bg-[#121729] rounded-2xl p-6 lg:p-10 m-2'>
            <p className='text-base text-[#d3d8e8]'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              provident maxime qui vero fugiat enim voluptates quo aut
              perferendis omnis"
            </p>
            <div className='h-1 bg-violet-500/80 w-16 my-6'></div>

            <div className='flex items-center gap-x-4'>
              <Image src={'/flags/bd.png'} alt='flag' height={40} width={40} />
              <div>
                <h4 className='font-semibold text-white text-sm mb-1'>
                  md asik
                </h4>
                <Image
                  src={'/images/review.svg'}
                  alt='flag'
                  height={16}
                  width={90}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='bg-[#121729] rounded-2xl p-6 lg:p-10 m-2'>
            <p className='text-base text-[#d3d8e8]'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              provident maxime qui vero fugiat enim voluptates quo aut
              perferendis omnis"
            </p>
            <div className='h-1 bg-violet-500/80 w-16 my-6'></div>

            <div className='flex items-center gap-x-4'>
              <Image
                src={'/flags/germany.png'}
                alt='flag'
                height={40}
                width={40}
              />
              <div>
                <h4 className='font-semibold text-white text-sm mb-1'>
                  md asik
                </h4>
                <Image
                  src={'/images/review.svg'}
                  alt='flag'
                  height={16}
                  width={90}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='bg-[#121729] rounded-2xl p-6 lg:p-10 m-2'>
            <p className='text-base text-[#d3d8e8]'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              provident maxime qui vero fugiat enim voluptates quo aut
              perferendis omnis"
            </p>
            <div className='h-1 bg-violet-500/80 w-16 my-6'></div>

            <div className='flex items-center gap-x-4'>
              <Image src={'/flags/usa.png'} alt='flag' height={40} width={40} />
              <div>
                <h4 className='font-semibold text-white text-sm mb-1'>
                  md asik
                </h4>
                <Image
                  src={'/images/review.svg'}
                  alt='flag'
                  height={16}
                  width={90}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='bg-[#121729] rounded-2xl p-6 lg:p-10 m-2'>
            <p className='text-base text-[#d3d8e8]'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              provident maxime "
            </p>
            <div className='h-1 bg-violet-500/80 w-16 my-6'></div>

            <div className='flex items-center gap-x-4'>
              <Image
                src={'/flags/africa.png'}
                alt='flag'
                height={40}
                width={40}
              />
              <div>
                <h4 className='font-semibold text-white text-sm mb-1'>
                  md asik
                </h4>
                <Image
                  src={'/images/review.svg'}
                  alt='flag'
                  height={16}
                  width={90}
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
