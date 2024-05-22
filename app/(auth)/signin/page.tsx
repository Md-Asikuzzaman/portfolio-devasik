"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MyInput from "@/app/components/shared/Input";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSchema } from "@/schema/zodSchema";
import toast from "react-hot-toast";
import clsx from "clsx";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (session) {
      router.replace("/dashboard");
      return;
    }
  }, [session, router]);

  //extract the inferred type from schema
  type ValidationSchemaType = z.infer<typeof authSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchemaType> = async (formData) => {
    const { email, password } = formData;

    setIsLoading(true);
    await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    }).then(({ ok, error }: any) => {
      if (ok) {
        toast.success("Login successful");
        router.push("/dashboard");
        router.refresh();
        setIsLoading(false);
      } else {
        toast.error(error);
        setIsLoading(false);
      }
    });

    reset();
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-[url('/images/cover.png')] bg-cover bg-center bg-no-repeat px-5">
      <div className="absolute left-0 top-0 -z-0 h-screen w-full bg-[rgba(0,0,0,.4)]" />
      <div className="z-10 w-full max-w-lg shrink-0 rounded-lg bg-black bg-opacity-40 p-12 backdrop-blur-md">
        <h3 className="text-2xl font-semibold text-white md:text-3xl">
          Sign in
        </h3>
        <p className="md:text-md mb-5 mt-2 text-sm text-white">
          Only for admin.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex flex-col gap-1">
            <MyInput
              id="email"
              label="Email Address"
              register={{ ...register("email") }}
            />
            <p className="text-sm text-orange-500">
              {errors && errors.email?.message}
            </p>
          </div>

          <div className="mb-4 flex flex-col gap-1">
            <MyInput
              type="password"
              id="password"
              label="Password"
              register={{ ...register("password") }}
            />
            <p className="text-sm text-orange-500">
              {errors && errors.password?.message}
            </p>
          </div>
          <button
            disabled={isLoading ? true : false}
            className={clsx(
              "mt-4 w-full rounded-md bg-orange-600 py-3 text-white transition hover:bg-orange-700",
              isLoading ? "cursor-not-allowed" : "cursor-pointer",
            )}
            type="submit"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <p className="mt-4 text-white">
            Goto main{" "}
            <Link
              className="text-orange-400 transition hover:text-orange-500"
              href={"/"}
            >
              site?
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Page;
