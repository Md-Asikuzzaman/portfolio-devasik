import { BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs';

const SocialLink = () => {
  return (
    <div className='flex items-center gap-4 py-12'>
      <a href='https://www.face.com'>
        <BsGithub className='w-8 h-8 text-zinc-400 hover:text-zinc-200 hover:scale-110 transition transform duration-200' />
      </a>

      <a href='https://www.face.com'>
        <BsLinkedin className='w-8 h-8 text-zinc-400 hover:text-zinc-200 hover:scale-110 transition transform duration-200' />
      </a>

      <a href='https://www.face.com'>
        <BsFacebook className='w-8 h-8 text-zinc-400 hover:text-zinc-200 hover:scale-110 transition transform duration-200' />
      </a>
    </div>
  );
};

export default SocialLink;
