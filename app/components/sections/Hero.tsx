"use client";

import { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

import Particle from "@/app/components/shared/Particle";
import HeroButton from "@/app/components/shared/HeroButton";

import { useActiveSection } from "@/lib/store";
import SocialIcon from "../shared/SocialIcon";
import { socialInfo } from "@/lib";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

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
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <div className="overlay z-10"></div>
      <div className="z-10 flex flex-col items-center justify-center">
        <h1 className="mb-5 text-center text-5xl font-extrabold tracking-tight md:mb-8 md:text-5xl lg:text-6xl">
          <span className="gradient__text">I'm Dev </span>
          <span className="hero-text-stroke">Asik.</span>
        </h1>

        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-600 dark:text-white lg:text-3xl">
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
        <div className="flex items-center gap-4 py-12">
          <SocialIcon variant="hero" link={socialInfo.github} Icon={BsGithub} />
          <SocialIcon
            variant="hero"
            link={socialInfo.linkedin}
            Icon={BsLinkedin}
          />
          <SocialIcon
            variant="hero"
            link={socialInfo.facebook}
            Icon={BsFacebook}
          />
        </div>
        <HeroButton />
      </div>
      <Particle />
    </section>
  );
};

export default Hero;
