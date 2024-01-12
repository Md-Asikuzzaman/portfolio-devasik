import { BsBriefcase } from 'react-icons/bs';
import SkillCard from '../SkillCard';

const Experience = () => {
  return (
    <div className='flex flex-col gap-5'>
      <SkillCard
        title='Senior Front-End Developer'
        company='Wafasoft (Contract)'
        duration='January 2019 - Running'
        details='A Passionate Software Developer, Entrepreneur and Programmer. I love to play with coding, building software, and focusing on learning new technologies.'
        Icon={BsBriefcase}
      />

      <SkillCard
        title='Web Designer'
        company='City It Park (Intern)'
        duration='Jan 2019 - Running'
        details='A Passionate Software Developer, Entrepreneur and Programmer. I love to play with coding, building software, and focusing on learning new technologies.'
        Icon={BsBriefcase}
        border='via-pink-500'
        color='text-pink-500'
        bg='bg-pink-500/30'
      />
    </div>
  );
};

export default Experience;
