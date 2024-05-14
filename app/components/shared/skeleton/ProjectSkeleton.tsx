import React from "react";

const ProjectSkeleton = () => {
  return (
    <div className="mx-auto w-full max-w-lg rounded-md border border-zinc-300 p-4 shadow dark:border-[#262B42]">
      <div className="flex animate-pulse flex-col">
        <div className="mb-4 h-44 w-full rounded-lg bg-zinc-300 dark:bg-slate-700 md:h-48"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="flex flex-col gap-3">
            <div className="h-4 rounded bg-zinc-300 dark:bg-slate-700"></div>
            <div className="h-4 rounded bg-zinc-300 dark:bg-slate-700"></div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="h-8 w-8 rounded-full bg-zinc-300 dark:bg-slate-700"></div>
            <div className="h-8 w-8 rounded-full bg-zinc-300 dark:bg-slate-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
