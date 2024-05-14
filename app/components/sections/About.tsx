"use client";

import { useEffect } from "react";
import Image from "next/image";

import Tab from "@/app/components/shared/Tab";
import TestimonialSlider from "@/app/components/sections/TestimonialSlider";

import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/lib/store";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
  });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("about");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="about" className="relative overflow-hidden lg:pb-10">
      <div className="relative z-0 pt-12">
        <div className="flex flex-row justify-center">
          <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-violet-300 to-transparent dark:via-[#262B42]"></div>
          <div className="absolute -top-[150px] h-[300px] w-[300px] rounded-full bg-violet-500/80 opacity-20 blur-3xl filter"></div>
        </div>
      </div>
      <div className="container">
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
          About Me
        </h2>
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          <div className="relative h-[280px] w-[280px] grayscale hover:grayscale-0 md:h-[250px] md:w-[250px] lg:h-[330px] lg:w-[330px]">
            <Image
              title="Don't touch me! 😂"
              className="cursor-grab rounded-[40px]"
              src={"/images/dev.jpg"}
              alt="dev"
              fill
              style={{
                backgroundSize: "cover",
              }}
            />
          </div>
          <Tab />
        </div>
      </div>

      <TestimonialSlider />
    </section>
  );
};

export default About;
