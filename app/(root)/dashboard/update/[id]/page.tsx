"use client";

import { useState, useEffect } from "react";
import MyInput from "@/app/components/shared/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface Props {
  params: { id: string };
}

interface QueryResponse {
  project: ProjectType;
}

const Page: NextPage<Props> = ({ params }) => {
  axios.defaults.baseURL = process.env.NEXTAUTH_URL;

  const { id } = params;
  const router = useRouter();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [website, setWebsite] = useState("");
  const [github, setGithub] = useState("");
  const [variant, setVariant] = useState("");

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImage("");
    setWebsite("");
    setGithub("");
    setVariant("");
  };

  const { data, isLoading } = useQuery<QueryResponse>({
    queryKey: ["fetch_project_byId", id],
    queryFn: async () => {
      const res = await axios.get(`/api/projects/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (data?.project) {
      setTitle(data?.project.title);
      setDescription(data?.project.description);
      setImage(data?.project.image);
      setWebsite(data?.project.website);
      setGithub(data?.project.github);
      setVariant(data?.project.variant);
    }
  }, [id, data]);

  const { mutate, isPending } = useMutation({
    mutationKey: ["update_project"],
    mutationFn: async (data: ProjectType) => {
      await axios.put(`/api/projects/update/${id}`, data);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fetch_projects"],
      });
      toast.success("Project updated!!!");
      router.replace("/dashboard");
      resetForm();
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({ title, description, image, website, github, variant });
  };

  return (
    <div className="flex items-start justify-center min-h-screen w-full md:mt-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white max-w-2xl w-full p-12 rounded-2xl shadow-lg"
      >
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          {isLoading ? "Loading..." : "Update Project"}
        </h2>
        <MyInput
          variant="bw"
          label="Title"
          id="title"
          value={title}
          data={setTitle}
        />
        <MyInput
          variant="bw"
          label="Description"
          id="description"
          value={description}
          data={setDescription}
        />
        <MyInput
          variant="bw"
          label="Image link"
          id="image"
          value={image}
          data={setImage}
        />
        <MyInput
          variant="bw"
          label="Site link"
          id="site"
          value={website}
          data={setWebsite}
        />
        <MyInput
          variant="bw"
          label="Github link"
          id="github"
          value={github}
          data={setGithub}
        />
        <MyInput
          variant="bw"
          label="Variant"
          id="variant"
          value={variant}
          data={setVariant}
        />
        <button
          className="w-full py-3 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 mt-4 transition"
          type="submit"
        >
          {isPending ? "Modifying..." : "Let's Modify"}
        </button>
      </form>
    </div>
  );
};

export default Page;
