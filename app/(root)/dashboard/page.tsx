"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import toast from "react-hot-toast";
import clsx from "clsx";

const Page = () => {
  axios.defaults.baseURL = process.env.NEXTAUTH_URL;
  const queryClient = useQueryClient();

  // [FETCH] projects
  const { data, isLoading, isFetching } = useQuery<ProjectType[]>({
    queryKey: ["fetch_projects"],
    queryFn: async () => {
      const { data } = await axios.get("/api/projects");

      return data.projects;
    },
    refetchOnMount: false,
  });

  // DELETE PROJECT
  const { mutate: handleDelete } = useMutation({
    mutationKey: ["update_project"],
    mutationFn: async (id: string) => {
      await axios.delete(`/api/projects/${id}`);
    },

    onSuccess: () => {
      toast.error("Project deleted!!!");
      queryClient.invalidateQueries({
        queryKey: ["fetch_projects"],
      });
    },

    onMutate: async (id: string) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["fetch_projects"] });

      // Snapshot the previous value
      const previousMessages = queryClient.getQueryData(["fetch_projects"]);

      // Optimistically update to the new value
      queryClient.setQueryData(["fetch_projects"], (old: ProjectType[]) =>
        old.filter((item) => item.id !== id),
      );

      // Return a context object with the snapshotted value
      return { previousMessages };
    },

    onError: (err, newMessage, context) => {
      queryClient.setQueryData(["fetch_projects"], context?.previousMessages);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["fetch_projects"] });
    },
  });

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold md:text-2xl">All Projects</h2>
      <div className="flex flex-col gap-3">
        <div className="relative overflow-x-scroll shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr className="border-b bg-white  hover:bg-gray-50">
                  <td className="px-6 py-4 text-center" colSpan={5}>
                    Loading...
                  </td>
                </tr>
              ) : (
                data?.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b bg-white  hover:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
                    >
                      {project.title}
                    </th>
                    <td className="px-6 py-4">
                      <ul>
                        {project.features.map((feature, _i) => (
                          <li key={_i}>⚡ {feature}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-2">
                      <div className="relative h-12 w-20">
                        <Image
                          src={project.image}
                          alt="cover"
                          fill
                          sizes="100px"
                        />
                      </div>
                    </td>
                    <td className="flex items-center gap-4 px-6 py-4">
                      <Link href={`/dashboard/update/${project.id}`}>
                        <button
                          disabled={isLoading || isFetching ? true : false}
                          className={clsx(
                            "flex items-center gap-1 font-medium text-blue-600",
                            isLoading || isFetching
                              ? "cursor-not-allowed"
                              : "cursor-pointer",
                          )}
                        >
                          Edit
                          <AiFillEdit size={18} />
                        </button>
                      </Link>

                      <button
                        onClick={() => {
                          if (window.confirm("Do you really want to delete?")) {
                            handleDelete(project.id ? project.id : "");
                          }
                        }}
                        className="flex items-center gap-1 font-medium text-rose-600 hover:underline"
                      >
                        Delete
                        <AiFillDelete size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
