"use client";

import { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

import Particle from "@/app/components/shared/Particle";
import HeroButton from "@/app/components/shared/HeroButton";
import SocialLink from "@/app/components/shared/SocialLink";

import { useActiveSection } from "@/lib/store";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.01,
  });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("home");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden dark:bg-[#0d1224] bg-[#faf2ff]"
    >
      <div className="overlay z-10"></div>
      <div className="flex items-center justify-center flex-col z-10">
        <h1 className="font-extrabold mb-5 md:mb-8 text-5xl md:text-5xl lg:text-6xl tracking-tight text-center">
          <span className="gradient__text">I'm Dev </span>
          <span className="hero-text-stroke">Asik.</span>
        </h1>

        <h2 className="text-slate-600 font-extrabold text-2xl lg:text-3xl tracking-tight text-center dark:text-white">
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer",
                "Senior Frontend Engineer",
                "Programmer",
                "Self taught Software Dev",
              ],
              autoStart: true,
              loop: true,
              cursor: "👨‍💻",
            }}
          />
        </h2>
        <div className="py-12">
          <SocialLink variant="hero" />
        </div>
        <HeroButton />
      </div>
      <Particle />
    </section>
  );
};

export default Hero;
