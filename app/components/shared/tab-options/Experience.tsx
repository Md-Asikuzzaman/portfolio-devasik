import { BsBriefcase } from 'react-icons/bs';
import SkillCard from '../SkillCard';

const Experience = () => {
  return (
    <div className='flex flex-col gap-5'>
      <SkillCard
        title='Senior Front-End Developer'
        company='TFM tools (Contract)'
        duration='January 2019 - Running'
        details={[
          'Responsive Web Design & Development',
          'State Management & Data Fetching',
          'UI Bug Fixing',
          'SEO and more.',
        ]}
        Icon={BsBriefcase}
      />

      <SkillCard
        title='Web Designer'
        company='City It Park (Intern)'
        duration='Jan 2019 - Running'
        details={[
          'Responsive Website Design',
          'UI Bug Fixing',
          'Website Deployment',
          'Basic SEO and more.',
        ]}
        Icon={BsBriefcase}
        border='via-pink-500'
        color='text-pink-500'
        bg='bg-pink-500/30'
      />
    </div>
  );
};

export default Experience;
