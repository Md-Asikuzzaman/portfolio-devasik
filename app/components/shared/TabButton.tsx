import clsx from "clsx";
import { NextPage } from "next";

interface Props {
  title: string;
  tabValue: number;
  currentTab: number;
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabButton: NextPage<Props> = ({
  title,
  tabValue,
  currentTab,
  setCurrentTab,
}) => {
  return (
    <button
      onClick={() => {
        setCurrentTab(tabValue);
      }}
      className={clsx(
        "text-md inline-block rounded-t-lg border-b-2 p-2 md:text-lg lg:p-3",
        currentTab === tabValue
          ? "active rounded-t-lg border-b-2 border-pink-500 bg-pink-500/10 text-pink-500"
          : "border-transparent hover:border-gray-600 hover:text-gray-600 dark:hover:border-gray-300 dark:hover:text-gray-300",
      )}
    >
      {title}
    </button>
  );
};

export default TabButton;
