import { NextPage } from "next";

interface Props {
  placeholder: string;
  register: object;
}

const CheckBox: NextPage<Props> = ({ placeholder, register }) => {
  return (
    <label className="label inline-flex cursor-pointer items-center gap-2 ">
      <input type="checkbox" className="checkbox checkbox-xs" {...register} />
      <span className="label-text">{placeholder}</span>
    </label>
  );
};

export default CheckBox;
