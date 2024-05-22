"use client";

import { useState, useEffect, ChangeEvent } from "react";
import MyInput from "@/app/components/shared/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { NextPage } from "next";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { _64ify } from "next-file-64ify";
import Image from "next/image";
import { projectSchema } from "@/schema/zodSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { defaultImgURL } from "@/lib";
import { z } from "zod";

interface Props {
  params: { id: string };
}

const Page: NextPage<Props> = ({ params }) => {
  axios.defaults.baseURL = process.env.NEXTAUTH_URL;

  const { id } = params;
  const router = useRouter();
  const queryClient = useQueryClient();

  const [image, setImage] = useState<File | any>();
  const [storeData, setStoreData] = useState<ProjectTypeFormUpdate>();

  //extract the inferred type from schema
  type ValidationSchemaType = z.infer<typeof projectSchema>;

  const { data, isLoading } = useQuery<ProjectType>({
    queryKey: ["fetch_project_byId", id],
    queryFn: async () => {
      const { data } = await axios.get(`/api/projects/${id}`);
      return data.project;
    },

    enabled: id ? true : false,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      features: "",
      repo_url: "",
      site_url: "",
    },
    values: {
      title: storeData?.title ?? "",
      features: storeData?.features.join("**") ?? "",
      repo_url: storeData?.repo_url ?? "",
      site_url: storeData?.site_url ?? "",
    },
  });

  // Auto-fill form data
  useEffect(() => {
    if (data) {
      setStoreData(data);
    }
  }, [id, data]);

  const { mutate, isPending } = useMutation({
    mutationKey: ["update_project"],
    mutationFn: async (data: AddProjectType) => {
      await axios.patch(`/api/projects/${id}`, data);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fetch_projects"],
      });

      reset();
      setImage("");
      toast.success("Project updated!!!");
      router.replace("/dashboard");
    },

    onMutate: async (newProject: object) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ["fetch_projects"] });

      // Snapshot the previous value
      const previousMessages = queryClient.getQueryData(["fetch_projects"]);

      // Optimistically update to the new value
      queryClient.setQueryData(["fetch_projects"], (old: ProjectType[]) => [
        newProject,
        ...old.filter((item) => item.id !== id),
      ]);

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

  // Form change handler
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFile = e.target.files && e.target.files[0];

    if (selectedFile) {
      const allowedTypes = ["image/jpeg", "image/png"];
      const allowedFileSize = { minSize: 0, maxSize: 1024 };

      const { data, isError, isValidSize } = await _64ify(
        selectedFile,
        allowedTypes,
        allowedFileSize,
      );

      if (!isError && isValidSize) {
        setImage(data);
      } else {
        toast.error("Image zise is too large!!!");
      }
    }
  };

  // Form submit handler
  const onSubmit: SubmitHandler<ValidationSchemaType> = (formData) => {
    const { title, features, site_url, repo_url } = formData;

    mutate({
      title,
      features: features.split("**"),
      image: image ? image : defaultImgURL,
      site_url,
      repo_url,
    });
  };

  return (
    <div className="flex min-h-screen w-full items-start justify-center md:mt-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl rounded-2xl bg-white p-12 shadow-lg"
      >
        <h2 className="mb-4 text-xl font-semibold md:text-2xl">
          Add a new Project
        </h2>

        {isLoading && "Loading..."}

        <div className="mb-4 flex flex-col gap-1">
          <MyInput
            variant="bw"
            label="Title"
            id="title"
            register={{ ...register("title") }}
          />
          <p className="text-sm text-rose-500">
            {errors && errors.title?.message}
          </p>
        </div>

        <div className="mb-4 flex flex-col gap-1">
          <MyInput
            variant="bw"
            label="Features"
            id="features"
            register={{ ...register("features") }}
          />

          <p className="text-sm text-rose-500">
            {errors && errors.features?.message}
          </p>
        </div>

        {image ? (
          <Image
            className="mb-4"
            src={image.toString()}
            alt="img"
            height={200}
            width={200}
          />
        ) : (
          storeData?.image && (
            <Image
              className="mb-4"
              src={storeData?.image}
              alt="img"
              height={200}
              width={200}
            />
          )
        )}

        <input
          className="mb-4"
          type="file"
          accept="image/jpeg, image/png"
          onChange={handleChange}
        />

        <div className="mb-4 flex flex-col gap-1">
          <MyInput
            variant="bw"
            label="Site link"
            id="site"
            register={{ ...register("site_url") }}
          />
          <p className="text-sm text-rose-500">
            {errors && errors.site_url?.message}
          </p>
        </div>

        <div className="mb-4 flex flex-col gap-1">
          <MyInput
            variant="bw"
            label="Github link"
            id="github"
            register={{ ...register("repo_url") }}
          />
          <p className="text-sm text-rose-500">
            {errors && errors.repo_url?.message}
          </p>
        </div>

        <button
          className="mt-4 w-full rounded-md bg-neutral-900 py-3 text-white transition hover:bg-neutral-800"
          type="submit"
        >
          {isPending ? "Modifying..." : "Let's Modify"}
        </button>
      </form>
    </div>
  );
};

export default Page;
