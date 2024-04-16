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
    <section
      ref={ref}
      id="contact"
      className="pb-14 overflow-hidden"
    >
      <div className="relative z-0 pt-14">
        <div className="flex flex-row justify-center">
          <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-violet-300 dark:via-[#262B42] to-transparent"></div>
          <div className="w-[300px] h-[300px] bg-violet-500/80 rounded-full absolute -top-[150px] filter blur-3xl  opacity-20"></div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-slate-900 dark:text-white mb-10">
          Contact Me
        </h2>

        <div className="flex flex-col md:gap-24 gap-14">
          <ContactForm />
          <div className="grid md:grid-cols-3 gap-3 md:gap-5">
            <div className="relative bg-white dark:bg-[#11152C] border border-slate-300 dark:border-[#262B42] rounded-md py-6 px-2 text-center h-full overflow-hidden">
              <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>

              <div className="h-14 w-14 rounded-full bg-violet-500/20 inline-flex items-center justify-center text-violet-500">
                <HiPhoneArrowDownLeft size={20} />
              </div>
              <h3 className="text-slate-900 dark:text-white text-lg pt-3 py-2">
                Call me Today
              </h3>
              <h4 className="text-slate-600 dark:text-[#d3d8e8] truncate text-base">
                WhatsApp:
                <a
                  target="_blank"
                  className="text-slate-900 dark:text-white font-semibold ml-1 border-b-[0.5px] border-pink-500 hover:border-none"
                  href={socialInfo.phone}
                >
                  +8801995-580559
                </a>
              </h4>
            </div>

            <div className="relative bg-white dark:bg-[#11152C] border border-slate-300 dark:border-[#262B42] rounded-md py-6 px-2 text-center h-full overflow-hidden">
              <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>

              <div className="h-14 w-14 rounded-full bg-pink-500/20 inline-flex items-center justify-center text-pink-500">
                <SiMinutemailer size={25} />
              </div>
              <h3 className="text-slate-900 dark:text-white text-lg pt-3 py-2">
                Send me Email
              </h3>

              <h4 className="text-slate-600 dark:text-[#d3d8e8] truncate text-base">
                Email:
                <a
                  target="_blank"
                  className="text-slate-900 dark:text-white font-semibold ml-1 border-b-[0.5px] border-pink-500 hover:border-none"
                  href={socialInfo.email}
                >
                  mdasikuzzaman.en@gmail.com
                </a>
              </h4>
            </div>

            <div className="relative bg-white dark:bg-[#11152C] border border-slate-300 dark:border-[#262B42] rounded-md py-6 px-2 text-center h-full overflow-hidden">
              <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
              <div className="h-14 w-14 rounded-full bg-green-500/20 inline-flex items-center justify-center text-green-500">
                <FaLocationDot size={20} />
              </div>
              <h3 className="text-slate-900 dark:text-white text-lg pt-3 py-2">
                My Location
              </h3>
              <h4 className="text-slate-600 dark:text-[#d3d8e8] text-base">
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
