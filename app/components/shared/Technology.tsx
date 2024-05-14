import clsx from "clsx";
import { NextPage } from "next";

import { IconType } from "react-icons";

interface Props {
  title: string;
  Icon: IconType;
  color: string;
  ringColor: string;
}

const Technology: NextPage<Props> = ({ title, Icon, color, ringColor }) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 ring-1 md:ring-2",
        color,
        ringColor
      )}
    >
      <Icon className="h-5 w-5" />
      {title}
    </span>
  );
};

export default Technology;
