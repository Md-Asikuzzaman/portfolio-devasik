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
        "inline-flex h-9 items-center gap-1 whitespace-nowrap rounded-full px-3 text-sm font-semibold ring-1 md:ring-2",
        color,
        ringColor,
      )}
    >
      <Icon className="h-5 w-5" />
      {title}
    </span>
  );
};

export default Technology;
