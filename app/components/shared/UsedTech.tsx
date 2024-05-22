import { NextPage } from "next";
import Image from "next/image";

interface Props {
  tech: string;
}

const UsedTech: NextPage<Props> = ({ tech }) => {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-full bg-[#ebebeb] p-[6px] dark:bg-zinc-100">
      <Image src={tech} height={30} width={30} alt="tech" />
    </div>
  );
};

export default UsedTech;
