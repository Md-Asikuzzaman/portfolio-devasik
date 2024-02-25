"use client";

import useProject from "@/hooks/useProjects";
import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import { toast } from "react-toastify";

import { AiFillDelete, AiFillEdit } from "react-icons/ai";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const { data, isLoading, mutate } = useProject();

  useEffect(() => {
    mutate();
  }, [mutate]);

  const handleClick = useCallback(
    async (id: string) => {
      if (window.confirm("Do you really want to delete?")) {
        const res = await axios.delete(`/api/projects/delete/${id}`);

        if (res.status === 200) {
          toast.error("Project deleted!!!");
        }

        mutate();
      }
    },
    [mutate]
  );

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold mb-4">All Projects</h2>
      <div className="flex flex-col gap-3">
        {/* table start */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Variant
                </th>
                <th scope="col" className="px-6 py-3">
                  image
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map(({ id, title, description, variant, image }) => (
                <tr key={id} className="bg-white border-b  hover:bg-gray-50">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {title}
                  </th>
                  <td className="px-6 py-4">{description.slice(0, 20)}</td>
                  <td className="px-6 py-4">{variant}</td>
                  <td className="p-2">
                    <Image
                      height={20}
                      width={80}
                      className="bg-cover bg-center"
                      src={image}
                      alt="cover"
                    />
                  </td>
                  <td className="px-6 py-4 flex items-center gap-4">
                    <Link
                      href={`/dashboard/update/${id}`}
                      className="flex items-center gap-1 font-medium text-blue-600 hover:underline"
                    >
                      Edit
                      <AiFillEdit size={18} />
                    </Link>
                    <button
                      onClick={() => handleClick(id)}
                      className="flex items-center gap-1 font-medium text-rose-600 hover:underline"
                    >
                      Delete
                      <AiFillDelete size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* table end */}
      </div>
    </div>
  );
};

export default Page;
