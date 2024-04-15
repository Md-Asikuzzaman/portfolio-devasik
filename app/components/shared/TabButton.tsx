import { NextPage } from 'next';

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
      className={`inline-flex p-2 lg:p-3 border-b-2 rounded-t-lg text-md md:text-lg ${
        currentTab == tabValue
          ? 'text-pink-500 bg-pink-500/10 border-b-2 border-pink-500 rounded-t-lg active'
          : 'hover:text-gray-300 hover:border-gray-300 border-transparent'
      } `}
    >
      {title}
    </button>
  );
};

export default TabButton;
