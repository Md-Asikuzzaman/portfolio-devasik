"use client";

import Slider from "react-slick";

import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Testimonial from "../shared/Testimonial";

const TestimonialSlider = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;

    return (
      <div
        className="gradient-btn absolute bottom-0 right-0 top-0 mx-0 my-auto inline-flex h-8 w-8 translate-y-0 cursor-pointer items-center justify-center rounded-full p-2 text-sm text-white opacity-80 transition hover:opacity-100 lg:translate-x-14"
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
        className="gradient-btn absolute bottom-0 left-0 top-0 z-20 mx-0 my-auto inline-flex h-8 w-8 translate-y-0 cursor-pointer items-center justify-center rounded-full p-2 text-sm text-white opacity-80 hover:opacity-100 lg:-translate-x-14"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };

  const settings = {
    className: "center max-w-[650px] lg:max-w-[750px] mx-auto",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          className: "px-4",
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="container relative py-14">
      <div className="my-12 text-center">
        <p className="my-4 text-sm font-medium uppercase tracking-widest text-violet-500">
          Testimonials
        </p>
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
          What my clients say
        </h2>
      </div>
      <Slider {...settings}>
        <Testimonial
          title={`"Great Developer, I can 100% recommend him to any future client."`}
          flagSrc="/flags/africa.png"
          clientName="Ziyaad Parker"
        />

        <Testimonial
          title={`"Absolutely skilled developer, the works was good. recommended!"`}
          flagSrc="/flags/bd.png"
          clientName="Ramjan Molla"
        />

        <Testimonial
          title={`"He is a good developer and good communicator."`}
          flagSrc="/flags/germany.png"
          clientName="July Alia"
        />

        <Testimonial
          title={`"He's designing skills is awesome. talented developer."`}
          flagSrc="/flags/bd.png"
          clientName="Akhter Hussian"
        />

        <Testimonial
          title={`"Great developer to work with, Really good job. Appreciate!!!"`}
          flagSrc="/flags/usa.png"
          clientName="Jack Jhon"
        />
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
