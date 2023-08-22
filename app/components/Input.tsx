import { NextPage } from 'next';

interface Props {
  id: string;
  label: string;
  type?: string;
  data?: any;
  value: string;
}

const MyInput: NextPage<Props> = ({ id, label, type, data, value }) => {
  return (
    <div className='relative'>
      <input
        type={type}
        id={id}
        onChange={(e) => data(e.target.value)}
        value={value}
        placeholder=' '
        className='
        mb-4
        block
        rounded-md
        px-6
        pt-6
        pb-1
        w-full
        text-md
        text-orange-500
        bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        '
      />
      <label
        htmlFor={id}
        className='
        absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 left-6 z-10 origin-[0]
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3
        '
      >
        {label}
      </label>
    </div>
  );
};

export default MyInput;
