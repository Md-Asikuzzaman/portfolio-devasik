"use client";

import { NextPage } from "next";
import { BsPatchCheckFill } from "react-icons/bs";
interface Props {
  title: string;
  company: string;
  duration: string;
  details: string[];
  Icon: any;
  border?: string;
  color?: string;
  bg?: string;
}

const SkillCard: NextPage<Props> = ({
  title,
  company,
  duration,
  details,
  Icon,
  border,
  color,
  bg,
}) => {
  return (
    <div className="relative rounded-md shadow-md border border-[#262B42] bg-[#12172A] p-5">
      <div className="top-0 left-0 z-50">
        <div className="flex flex-row justify-center">
          <div
            className={`absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent ${
              border ? border : "via-violet-500"
            }`}
          ></div>
        </div>
      </div>
      <div className="flex h-[inherit] gap-6">
        <div className="shrink-0 flex flex-col justify-center items-center gap-2">
          <Icon
            className={`shrink-0 text-3xl ${color ? color : "text-violet-500"}`}
          />
          <div className={`w-[2px] h-full ${bg ? bg : "bg-violet-500/30"}`} />
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-white">
            {title}
          </h3>
          <h5
            className={`text-md mt-2 font-bold ${
              color ? color : "text-violet-500"
            }`}
          >
            {company}
          </h5>
          <ul className="list-disc list-inside text-zinc-400 text-sm">
            <li>{duration}</li>
          </ul>
          <div className="mt-5 flex flex-col gap-2">
            {details.map((option, i) => (
              <p key={i} className="text-[#d3d8e8] leading-6 flex gap-2">
                <BsPatchCheckFill
                  className="text-green-500 mt-[4px] shrink-0"
                  size={16}
                />{" "}
                {option}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
