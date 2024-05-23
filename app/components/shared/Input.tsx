import { NextPage } from "next";

interface Props {
  label: string;
  placeholder: string;
  register: object;
  type?: "text" | "textarea";
}

const MyInput: NextPage<Props> = ({ label, placeholder, register, type }) => {
  return (
    <>
      {type === "text" ? (
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
          <input
            type="text"
            placeholder={placeholder}
            className="input input-bordered input-md w-full"
            {...register}
          />
        </label>
      ) : (
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">{label}</span>
          </div>

          <textarea
            {...register}
            className="textarea textarea-bordered"
            placeholder={placeholder}
          ></textarea>
        </label>
      )}
    </>
  );
};

export default MyInput;
