"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/hooks/useActiveSection";

import Image from "next/image";

import Tab from "@/app/components/shared/Tab";
import TestimonialSlider from "@/app/components/sections/TestimonialSlider";

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
    <section
      ref={ref}
      id="about"
      className="relative overflow-hidden lg:pb-10 dark:bg-[#0d1224]"
    >
      <div className="relative z-0 pt-12">
        <div className="flex flex-row justify-center">
          <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#262B42] to-transparent"></div>
          <div className="w-[300px] h-[300px] bg-violet-500/80 rounded-full absolute -top-[150px] filter blur-3xl opacity-20"></div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-white mb-10">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="relative w-[280px] h-[280px] md:w-[250px] md:h-[250px] lg:w-[330px] lg:h-[330px] grayscale hover:grayscale-0">
            <Image
              title="Don't touch me! 😂"
              className="rounded-[40px] cursor-grab"
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
