"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { HiPhoneArrowDownLeft } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { socialInfo } from "@/lib";
import ContactForm from "../shared/ContactForm";

import { useActiveSection } from "@/lib/store";

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("contact");
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id="contact" className="overflow-hidden pb-14">
      <div className="relative z-0 pt-14">
        <div className="flex flex-row justify-center">
          <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-violet-300 to-transparent dark:via-[#262B42]"></div>
          <div className="absolute -top-[150px] h-[300px] w-[300px] rounded-full bg-violet-500/80 opacity-20 blur-3xl  filter"></div>
        </div>
      </div>

      <div className="container">
        <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          Contact Me
        </h2>

        <div className="flex flex-col gap-14 md:gap-24">
          <ContactForm />
          <div className="grid gap-3 md:grid-cols-3 md:gap-5">
            <div className="relative h-full overflow-hidden rounded-md border border-slate-300 bg-white px-2 py-6 text-center dark:border-[#262B42] dark:bg-[#11152C]">
              <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/20 text-violet-500">
                <HiPhoneArrowDownLeft size={20} />
              </div>
              <h3 className="py-2 pt-3 text-lg text-slate-900 dark:text-white">
                Call me Today
              </h3>
              <h4 className="truncate text-base text-slate-600 dark:text-[#d3d8e8]">
                WhatsApp:
                <a
                  target="_blank"
                  className="ml-1 border-b-[0.5px] border-pink-500 font-semibold text-slate-900 hover:border-none dark:text-white"
                  href={socialInfo.phone}
                >
                  +8801995-580559
                </a>
              </h4>
            </div>

            <div className="relative h-full overflow-hidden rounded-md border border-slate-300 bg-white px-2 py-6 text-center dark:border-[#262B42] dark:bg-[#11152C]">
              <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-pink-500/20 text-pink-500">
                <SiMinutemailer size={25} />
              </div>
              <h3 className="py-2 pt-3 text-lg text-slate-900 dark:text-white">
                Send me Email
              </h3>

              <h4 className="truncate text-base text-slate-600 dark:text-[#d3d8e8]">
                Email:
                <a
                  target="_blank"
                  className="ml-1 border-b-[0.5px] border-pink-500 font-semibold text-slate-900 hover:border-none dark:text-white"
                  href={socialInfo.email}
                >
                  mdasikuzzaman.en@gmail.com
                </a>
              </h4>
            </div>

            <div className="relative h-full overflow-hidden rounded-md border border-slate-300 bg-white px-2 py-6 text-center dark:border-[#262B42] dark:bg-[#11152C]">
              <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                <FaLocationDot size={20} />
              </div>
              <h3 className="py-2 pt-3 text-lg text-slate-900 dark:text-white">
                My Location
              </h3>
              <h4 className="text-base text-slate-600 dark:text-[#d3d8e8]">
                Khulna, Bangladesh
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
