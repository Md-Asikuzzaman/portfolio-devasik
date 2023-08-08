'use client';
import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Slide from '../Slide';

export default function Testimonial() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 12,
      },
    },

    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <section className='py-14 bg-black/90'>
      <div className='container'>
        <h2 className='text-xl text-center font-bold text-[#888888] mb-4'>
          What client say about me
        </h2>

        <div ref={sliderRef} className='keen-slider max-w-xl mx-auto'>
          <Slide
            name='Akhtar Hussian'
            title='Freelancer'
            flag='/flags/bd.png'
            feedback="He's designing skills is awesome. talented developer."
          />

          <Slide
            name='July Alia'
            title='Graphics Designer'
            flag='/flags/germany.png'
            feedback='He is a good developer and good communicator.'
          />

          <Slide
            name='Jack Jhon'
            title='Content Creator'
            flag='/flags/usa.png'
            feedback='Great developer to work with, Really good job. Appreciate!!!'
          />

          <Slide
            name='Ziyaad Parker'
            title='Businessman'
            flag='/flags/africa.png'
            feedback='Great Developer, I can 100% recommend him to any future client.'
          />

          <Slide
            name='Ramjan Molla'
            title='Digital marketing export'
            flag='/flags/bd.png'
            feedback='Absolutely skilled developer, the works was good. recommended!'
          />
        </div>
      </div>
    </section>
  );
}
