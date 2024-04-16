"use client";

import { NextPage } from "next";
import { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/hooks/useActiveSection";

import Project from "@/app/components/shared/Project";
import { LuLoader2 } from "react-icons/lu";

import axios from "axios";
import ProjectSkeleton from "../shared/skeleton/ProjectSkeleton";
import { useInfiniteQuery } from "@tanstack/react-query";

const Projects: NextPage = () => {
  const {
    data: projects,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
  } = useInfiniteQuery<ProjectType[]>({
    queryKey: ["projects"],
    queryFn: async ({ pageParam = 1 }) => {
      const { data } = await axios.get("/api/infinite-projects", {
        params: {
          _page: pageParam,
          _limit: 3,
        },
      });

      return data;
    },

    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    if (inView) {
      setActiveSection("works");
    }
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      id="works"
      className="relative overflow-hidden pb-16 bg-[#fafafa] dark:dark:bg-[#0d1224]"
    >
      <div className="relative z-0 pt-14">
        <div className="flex flex-row justify-center">
          <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-violet-300 dark:via-[#262B42] to-transparent"></div>
          <div className="w-[300px] h-[300px] bg-violet-500/80 rounded-full absolute -top-[150px] filter blur-3xl  opacity-20"></div>
        </div>
      </div>
      <div className="container">
        <h2 className="text-2xl md:text-3xl text-center font-bold text-slate-900 dark:text-white mb-10">
          Recent Works
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {isPending
            ? [0, 1, 2].map((_i, i) => <ProjectSkeleton key={i} />)
            : projects?.pages.map((page) =>
                page.map((project) => (
                  <Project
                    key={project.id}
                    id={project.id}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                    website={project.website}
                    github={project.github}
                  />
                ))
              )}
        </div>

        {hasNextPage && !isPending && (
          <div className="flex justify-center pt-10">
            <button
              onClick={() => fetchNextPage()}
              className="gradient-btn flex items-center gap-1"
            >
              {isFetchingNextPage && (
                <LuLoader2 className="animate-spin" size={20} />
              )}
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
