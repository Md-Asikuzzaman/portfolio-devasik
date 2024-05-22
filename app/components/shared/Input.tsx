import { NextPage } from "next";
import clsx from "clsx";
import { FieldErrors } from "react-hook-form";

interface Props {
  id: string;
  label: string;
  type?: string;
  variant?: string;
  register: object;

}

const MyInput: NextPage<Props> = ({
  id,
  label,
  type,
  variant,
  register,

}) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        {...register}
        placeholder=" "
        className={clsx(
          "text-md peer block w-full appearance-none rounded-md px-6 pb-1 pt-6 focus:outline-none focus:ring-0",
          variant
            ? "bg-neutral-700 text-white"
            : "bg-neutral-700 text-orange-500",
        )}
      />

      <label
        htmlFor={id}
        className="
        text-md absolute left-6 top-4 z-10 origin-[0] -translate-y-3 scale-75 transform text-zinc-400 duration-150
        peer-placeholder-shown:translate-y-0
        peer-placeholder-shown:scale-100
        peer-focus:-translate-y-3
        peer-focus:scale-75
        "
      >
        {label}
      </label>

    </div>
  );
};

export default MyInput;
