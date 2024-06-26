"use client";

import { NextPage } from "next";
import Image from "next/image";

import { PiLinkDuotone } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import UsedTech from "./UsedTech";

interface Props {
  project: ProjectType;
}

const Project: NextPage<Props> = ({
  project: { title, features, image, site_url, repo_url, technologys },
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg border border-slate-300 bg-white shadow-md transition-colors duration-200 ease-in-out hover:border-slate-400 dark:border-[#262B42] dark:bg-[#12172a] dark:hover:border-[#434865]">
      <div className="relative h-48 w-full">
        <Image
          className="h-full rounded-t-lg bg-contain shadow-md"
          src={image}
          alt={"project-cover"}
          fill={true}
        />
      </div>
      <div className="p-4">
        <h3 className="pb-4 text-center text-xl font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>

        <ul className="flex flex-col gap-[2px] text-sm text-slate-900 dark:text-white">
          {features.map((feature, _i) => (
            <li key={_i}>🚀 {feature}</li>
          ))}
        </ul>

        <div className="my-4 flex flex-wrap items-end justify-center gap-2">
          {technologys?.react && <UsedTech tech="/tech/reactjs.webp" />}
          {technologys?.next && <UsedTech tech="/tech/nextjs.png" />}
          {technologys?.ts && <UsedTech tech="/tech/typescript.png" />}
          {technologys?.js && <UsedTech tech="/tech/javascript.png" />}
          {technologys?.prisma && <UsedTech tech="/tech/prisma.png" />}
          {technologys?.mongodb && <UsedTech tech="/tech/mongodb.png" />}
          {technologys?.nextauth && <UsedTech tech="/tech/next-auth.png" />}
          {technologys?.rquery && <UsedTech tech="/tech/react-query.png" />}
          {technologys?.zustand && <UsedTech tech="/tech/zustand.png" />}
          {technologys?.zod && <UsedTech tech="/tech/zod.png" />}
          {technologys?.tailwind && <UsedTech tech="/tech/tailwindcss.png" />}
        </div>

        <hr className="my-4 h-px border-0 bg-gray-200 dark:bg-[#262B42]" />

        <div className="flex items-center justify-center gap-3">
          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20 text-violet-500 transition-colors hover:bg-violet-500/30"
            href={site_url}
            target="_blank"
          >
            <PiLinkDuotone className="h-5 w-5" />
          </a>

          <a
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/20 text-pink-500 transition-colors hover:bg-pink-500/30"
            href={repo_url}
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
