"use client";

import Slider from "react-slick";

import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Testimonial from "../shared/Testimonial";

const TestimonialSlider = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;

    return (
      <div
        className="absolute translate-y-0 lg:translate-x-14 mx-0 bottom-0 right-0 top-0 my-auto h-8 w-8 gradient-btn opacity-80 hover:opacity-100 transition inline-flex items-center justify-center text-sm p-2 rounded-full text-white cursor-pointer"
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
        className="absolute translate-y-0 lg:-translate-x-14 z-20 mx-0 bottom-0 left-0 top-0 my-auto h-8 w-8 gradient-btn opacity-80 hover:opacity-100 inline-flex items-center justify-center text-sm p-2 rounded-full text-white cursor-pointer"
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
    <div className="container relative py-14 ">
      <div className="my-12 text-center">
        <p className="font-medium my-4 text-violet-500 text-sm tracking-widest uppercase">
          Testimonials
        </p>
        <h2 className="text-2xl md:text-3xl text-center font-bold text-white mb-10">
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
