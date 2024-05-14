import { NextPage } from "next";
import Image from "next/image";

interface Props {
  title: string;
  flagSrc: string;
  clientName: string;
}

const Testimonial: NextPage<Props> = ({ title, flagSrc, clientName }) => {
  return (
    <div className="m-2 rounded-2xl border border-slate-300 bg-white p-6 transition-colors duration-200 ease-in-out hover:border-slate-400 dark:border-[#262B42] dark:bg-[#121729] dark:hover:border-[#434865] lg:p-10">
      <p className="text-base text-slate-600 dark:text-[#d3d8e8]">{title}</p>
      <div className="my-6 h-1 w-16 bg-violet-500/80"></div>

      <div className="flex items-center gap-x-4">
        <Image src={flagSrc} alt="flag" height={40} width={40} />
        <div>
          <h4 className="mb-1 text-sm font-semibold text-slate-900 dark:text-white">
            {clientName}
          </h4>
          <Image
            src={"/images/review.svg"}
            alt="country-flag"
            height={16}
            width={90}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
