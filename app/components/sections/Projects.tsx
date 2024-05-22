"use client";

import { NextPage } from "next";
import { useEffect } from "react";

import { useInView } from "react-intersection-observer";

import Project from "@/app/components/shared/Project";
import { LuLoader2 } from "react-icons/lu";

import axios from "axios";
import ProjectSkeleton from "../shared/skeleton/ProjectSkeleton";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useActiveSection } from "@/lib/store";

interface QueryResponse {
  projects: ProjectType[];
}

const Projects: NextPage = () => {
  const {
    data: projects,
    fetchNextPage,
    hasNextPage,
    isPending,
    isFetchingNextPage,
  } = useInfiniteQuery<QueryResponse>({
    queryKey: ["projects"],
    queryFn: async ({ pageParam }) => {
      const { data } = await axios.get("/api/infinite-projects", {
        params: {
          _initialPage: pageParam,
          _limitPerPage: 3,
        },
      });

      return data;
    },

    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.projects.length > 0 ? allPages.length + 1 : undefined;
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
    <section ref={ref} id="works" className="relative overflow-hidden pb-16">
      <div className="relative z-0 pt-14">
        <div className="flex flex-row justify-center">
          <div className="absolute top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-violet-300 to-transparent dark:via-[#262B42]"></div>
          <div className="absolute -top-[150px] h-[300px] w-[300px] rounded-full bg-violet-500/80 opacity-20 blur-3xl filter"></div>
        </div>
      </div>
      <div className="container">
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
          Recent Works
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {isPending
            ? [0, 1, 2].map((_i, i) => <ProjectSkeleton key={i} />)
            : projects?.pages.map((page) =>
                page.projects.map((project: ProjectType) => (
                  <Project key={project.id} project={project} />
                )),
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
