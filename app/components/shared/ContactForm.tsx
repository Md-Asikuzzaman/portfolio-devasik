import { NextPage } from "next";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import ReCAPTCHA from "react-google-recaptcha";

import { schema } from "@/lib/form_schema";
import { useRef, useState } from "react";

interface Props {}

const ContactForm: NextPage<Props> = ({}) => {
  const [captha, setCaptha] = useState<string>("");

  const recaptcharef = useRef<ReCAPTCHA>(null);

  //extract the inferred type from schema
  type ValidationSchemaType = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(schema),
  });

  // Google captha values
  function onChange(value: any | string) {
    setCaptha(value);
  }

  const isCapthaVerified = captha.length > 1000 && captha !== "";

  // Form submit handler
  const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
    if (isCapthaVerified) {
      console.log(data);

      recaptcharef.current?.reset();
      setCaptha("");
      reset();
    } else {
      console.log("Unverified!!!");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-3xl w-full border-[#434865] border rounded-lg p-5 lg:p-10">
        <h3 className="text-lg lg:text-2xl text-center text-[#d3d8e8] mb-8 md:mb-12">
          I'm here for you, Send a quote for any questions or help.
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="mb-4">
            <label className="text-[#d3d8e8]" htmlFor="email">
              Your email:
            </label>
            <input
              type="text"
              id="email"
              autoComplete="off"
              {...register("email")}
              className="bg-[#121629] border border-[#262B42] text-white text-base rounded-lg focus:outline-none focus:border-violet-500/70 block w-full p-2.5"
            />
            {errors.email && (
              <span className="text-pink-500 text-sm">
                {errors.email?.message}
              </span>
            )}
          </p>

          <p className="mb-4">
            <label className="text-[#d3d8e8]" htmlFor="message">
              Your message:
            </label>
            <textarea
              className="bg-[#121629] border border-[#262B42] text-white text-base rounded-lg focus:outline-none focus:border-violet-500/70  block w-full p-2.5"
              id="message"
              autoComplete="off"
              rows={5}
              {...register("message")}
            ></textarea>
            {errors.message && (
              <span className="text-pink-500 text-sm">
                {errors.message?.message}
              </span>
            )}
          </p>

          <ReCAPTCHA
            sitekey="6LdqVHkpAAAAANo9HHph57mZjQG62hxD4n83dWQI"
            onChange={onChange}
            ref={recaptcharef}
          />

          <button type="submit" className="gradient-btn mt-3">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
