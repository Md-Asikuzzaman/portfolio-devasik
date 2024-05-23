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
import CheckBox from "@/app/components/shared/CheckBox";

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

  const { data, isFetching } = useQuery<ProjectType>({
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
      technologys: storeData?.technologys ?? {},
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
    const { title, features, site_url, repo_url, technologys } = formData;

    mutate({
      title,
      features: features.split("**"),
      image: image ? image : storeData?.image ?? defaultImgURL,
      site_url,
      repo_url,
      technologys,
    });
  };

  return (
    <div className="flex min-h-screen w-full items-start justify-center md:mt-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl rounded-2xl bg-white p-12 shadow-lg"
      >
        {isFetching ? (
          <div className="mb-4 flex items-center gap-2">
            <span className="loading loading-spinner"></span>
            <h2 className="text-xl font-semibold md:text-2xl">
              Auto fill data...
            </h2>
          </div>
        ) : (
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            Update Project
          </h2>
        )}

        {/* [Title] input field */}
        <div className="mb-4 flex flex-col gap-1">
          <MyInput
            type="text"
            label="Title"
            placeholder="Type title"
            register={{ ...register("title") }}
          />
          <p className="text-sm text-rose-500">
            {errors && errors.title?.message}
          </p>
        </div>

        {/* [Features] input field */}
        <div className="mb-4 flex flex-col gap-1">
          <MyInput
            type="textarea"
            label="Features"
            placeholder="Type features"
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

        {/* [Site-URL] input field */}
        <div className="mb-4 flex flex-col gap-1">
          <MyInput
            type="text"
            label="Site link"
            placeholder="Type site link"
            register={{ ...register("site_url") }}
          />
          <p className="text-sm text-rose-500">
            {errors && errors.site_url?.message}
          </p>
        </div>

        {/* [Github-URL] input field */}
        <div className="mb-4 flex flex-col gap-1">
          <MyInput
            type="text"
            label="Github link"
            placeholder="Type GitHub repo link"
            register={{ ...register("repo_url") }}
          />
          <p className="text-sm text-rose-500">
            {errors && errors.repo_url?.message}
          </p>
        </div>

        {/* [Technology] input */}
        <div className="mb-4 flex flex-wrap items-center gap-1">
          <CheckBox
            register={{ ...register("technologys.react") }}
            placeholder="React"
          />
          <CheckBox
            register={{ ...register("technologys.next") }}
            placeholder="Next"
          />
          <CheckBox
            register={{ ...register("technologys.ts") }}
            placeholder="TS"
          />
          <CheckBox
            register={{ ...register("technologys.js") }}
            placeholder="JS"
          />
          <CheckBox
            register={{ ...register("technologys.mongodb") }}
            placeholder="MongoDB"
          />
          <CheckBox
            register={{ ...register("technologys.mysql") }}
            placeholder="MySQL"
          />
          <CheckBox
            register={{ ...register("technologys.prisma") }}
            placeholder="Prisma"
          />
          <CheckBox
            register={{ ...register("technologys.rquery") }}
            placeholder="R-Query"
          />
          <CheckBox
            register={{ ...register("technologys.zustand") }}
            placeholder="Zustand"
          />
          <CheckBox
            register={{ ...register("technologys.tailwind") }}
            placeholder="Tailwind"
          />
          <CheckBox
            register={{ ...register("technologys.nextauth") }}
            placeholder="Next-Auth"
          />
          <CheckBox
            register={{ ...register("technologys.zod") }}
            placeholder="Zod"
          />
          <CheckBox
            register={{ ...register("technologys.fmotion") }}
            placeholder="F-Motion"
          />
          <CheckBox
            register={{ ...register("technologys.graphgl") }}
            placeholder="GraphQL"
          />
          <CheckBox
            register={{ ...register("technologys.nmailer") }}
            placeholder="N-Mailer"
          />
        </div>

        <button
          disabled={(isFetching || isPending) && true}
          type="submit"
          className="btn btn-neutral"
        >
          {isPending && <span className="loading loading-spinner"></span>}
          {isPending ? "Modifying..." : "Let's Modify"}
        </button>
      </form>
    </div>
  );
};

export default Page;
