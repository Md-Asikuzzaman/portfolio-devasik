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
        "inline-block p-2 lg:p-3 border-b-2 rounded-t-lg text-md md:text-lg",
        currentTab === tabValue
          ? "text-pink-500 bg-pink-500/10 border-b-2 border-pink-500 rounded-t-lg active"
          : "hover:text-gray-600 hover:border-gray-600 dark:hover:text-gray-300 dark:hover:border-gray-300 border-transparent"
      )}
    >
      {title}
    </button>
  );
};

export default TabButton;
