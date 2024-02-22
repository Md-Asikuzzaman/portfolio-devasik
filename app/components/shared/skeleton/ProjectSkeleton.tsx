import React from "react";

const ProjectSkeleton = () => {
  return (
    <div className="border border-[#262B42] shadow rounded-md p-4 max-w-lg w-full mx-auto">
      <div className="animate-pulse flex flex-col">
        <div className="rounded-lg bg-slate-700 mb-4 h-44 md:h-48 w-full"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="flex flex-col gap-3">
            <div className="h-4 bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-700 rounded"></div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="h-8 w-8 bg-slate-700 rounded-full"></div>
            <div className="h-8 w-8 bg-slate-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSkeleton;
