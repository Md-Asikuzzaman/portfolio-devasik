'use client';
import * as React from 'react';
import { NextPage } from 'next';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

interface Props {}

const Services: NextPage<Props> = ({}) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free',
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <section>
      <div className='container'>
        <h2>Services section</h2>
        <div ref={ref} className='keen-slider'>
          <div className='keen-slider__slide number-slide1'>1</div>
          <div className='keen-slider__slide number-slide2'>2</div>
          <div className='keen-slider__slide number-slide3'>3</div>
          <div className='keen-slider__slide number-slide4'>4</div>
          <div className='keen-slider__slide number-slide5'>5</div>
          <div className='keen-slider__slide number-slide6'>6</div>
        </div>
      </div>
    </section>
  );
};

export default Services;
