import { BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs';

const SocialLink = () => {
  return (
    <div className='flex items-center gap-4 py-12'>
      <a href='https://www.face.com'>
        <BsGithub className='w-8 h-8 text-slate-400 hover:text-slate-500 duration-200' />
      </a>

      <a href='https://www.face.com'>
        <BsLinkedin className='w-8 h-8 text-slate-400 hover:text-slate-500 duration-200' />
      </a>

      <a href='https://www.face.com'>
        <BsFacebook className='w-8 h-8 text-slate-400 hover:text-slate-500 duration-200' />
      </a>
    </div>
  );
};

export default SocialLink;
