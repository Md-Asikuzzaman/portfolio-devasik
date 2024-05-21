"use client";

import { useState, ChangeEvent } from "react";
import MyInput from "@/app/components/shared/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Image from "next/image";

import { _64ify } from "next-file-64ify";

const Page = () => {
  axios.defaults.baseURL = process.env.NEXTAUTH_URL;
  const router = useRouter();
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const [features, setFeatures] = useState("");
  const [site_url, setSite_url] = useState("");
  const [repo_url, setRepo_url] = useState("");

  const [image, setImage] = useState<File | any>(null);

  // Add specific file types here...
  const allowedTypes = ["image/jpeg", "image/png"];

  // Add specific file size here...
  const allowedFileSize = { minSize: 0, maxSize: 1024 };

  const resetForm = () => {
    setTitle("");
    setFeatures("");
    setImage(null);
    setSite_url("");
    setRepo_url("");
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files && e.target.files[0];

    if (selectedFile) {
      const { data, isError, isValidSize } = await _64ify(
        selectedFile,
        allowedTypes,
        allowedFileSize,
      );

      if (!isError && isValidSize) {
        setImage(data);
      }
    }
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["add_project"],
    mutationFn: async (data: AddProjectType) => {
      await axios.post("/api/projects", data);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fetch_projects"],
      });

      toast.success("Project created!!!");
      router.replace("/dashboard");
      resetForm();
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate({
      title,
      features: features.split(","),
      image,
      site_url,
      repo_url,
    });
  };

  return (
    <div className="flex min-h-screen w-full items-start justify-center md:mt-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl rounded-2xl bg-white p-12 shadow-lg"
      >
        <h2 className="mb-4 text-xl font-semibold md:text-2xl">
          Add a new Project
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
          label="Features"
          id="features"
          value={features}
          data={setFeatures}
        />

        {image && (
          <Image
            className="mb-4"
            src={image.toString()}
            alt="img"
            height={200}
            width={200}
          />
        )}

        <input
          className="mb-4"
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleChange}
        />

        <MyInput
          variant="bw"
          label="Site link"
          id="site"
          value={site_url}
          data={setSite_url}
        />
        <MyInput
          variant="bw"
          label="Github link"
          id="github"
          value={repo_url}
          data={setRepo_url}
        />
        <button
          className="mt-4 w-full rounded-md bg-neutral-900 py-3 text-white transition hover:bg-neutral-800"
          type="submit"
        >
          {isPending ? "Adding..." : "Let's Add"}
        </button>
      </form>
    </div>
  );
};

export default Page;
