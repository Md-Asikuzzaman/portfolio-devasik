"use client";

import { NextPage } from "next";
import Image from "next/image";

import { PiLinkDuotone } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";

interface Props {
  id?: string;
  image: string;
  title: string;
  description: string;
  github: string;
  website: string;
  category?: string;
}

const Project: NextPage<Props> = ({
  image,
  title,
  description,
  github,
  website,
}) => {
  return (
    <div className="relative bg-[#12172a] shadow-md text-center rounded-lg overflow-hidden border border-[#262B42] hover:border-[#434865] transition-colors duration-200 ease-in-out">
      <div className="relative h-44 md:h-48 w-full">
        <Image
          className="shadow-md rounded-t-lg h-full bg-contain"
          src={image}
          alt={"project"}
          fill={true}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl text-white text-center font-semibold pb-4">
          {title}
        </h3>
        <p className="text-[#d3d8e8] text-sm leading-6 text-center">
          {description}
        </p>
        <div className="flex items-center justify-center gap-3 mt-4 mb-2">
          <a
            className="h-10 w-10 rounded-full bg-violet-500/20 inline-flex items-center justify-center text-violet-500"
            href={website}
            target="_blank"
          >
            <PiLinkDuotone className="h-5 w-5" />
          </a>

          <a
            className="h-10 w-10 rounded-full bg-pink-500/20 inline-flex items-center justify-center text-pink-500"
            href={github}
            target="_blank"
          >
            <FiGithub className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
