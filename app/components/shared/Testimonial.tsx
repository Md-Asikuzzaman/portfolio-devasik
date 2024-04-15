import { NextPage } from "next";
import Image from "next/image";

interface Props {
  title: string;
  flagSrc: string;
  clientName: string;
}

const Testimonial: NextPage<Props> = ({ title, flagSrc, clientName }) => {
  return (
    <div className="bg-[#121729] rounded-2xl p-6 lg:p-10 m-2 border border-[#262B42] hover:border-[#434865] transition-colors duration-200 ease-in-out">
      <p className="text-base text-[#d3d8e8]">{title}</p>
      <div className="h-1 bg-violet-500/80 w-16 my-6"></div>

      <div className="flex items-center gap-x-4">
        <Image src={flagSrc} alt="flag" height={40} width={40} />
        <div>
          <h4 className="font-semibold text-white text-sm mb-1">
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
