"use client";

import clsx from "clsx";
import { NextPage } from "next";
import { IconType } from "react-icons";
import { BsPatchCheckFill } from "react-icons/bs";
interface Props {
  title: string;
  company: string;
  duration: string;
  details: string[];
  Icon: IconType;
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
    <div className="relative rounded-md border bg-white p-5 shadow-md dark:border-[#262B42] dark:bg-[#12172A]">
      <div className="left-0 top-0 z-50">
        <div className="flex flex-row justify-center">
          <div
            className={clsx(
              "absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent",
              border ? border : "via-violet-500",
            )}
          ></div>
        </div>
      </div>
      <div className="flex h-[inherit] gap-6">
        <div className="flex shrink-0 flex-col items-center justify-center gap-2">
          <Icon
            className={clsx(
              "shrink-0 text-3xl",
              color ? color : "text-violet-500",
            )}
          />
          <div
            className={clsx("h-full w-[2px]", bg ? bg : "bg-violet-500/30")}
          />
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-white">
            {title}
          </h3>
          <h5
            className={clsx(
              "text-md mt-2 font-bold",
              color ? color : "text-violet-500",
            )}
          >
            {company}
          </h5>
          <ul className="list-inside list-disc text-sm text-zinc-500 dark:text-zinc-400">
            <li>{duration}</li>
          </ul>
          <div className="mt-5 flex flex-col gap-2">
            {details.map((option, i) => (
              <p
                key={i}
                className="flex gap-2 leading-6 text-slate-600 dark:text-[#d3d8e8]"
              >
                <BsPatchCheckFill
                  className="mt-[4px] shrink-0 text-green-500"
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
