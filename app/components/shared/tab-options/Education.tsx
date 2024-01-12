import React from 'react';
import SkillCard from '../SkillCard';

import { PiStudentLight } from 'react-icons/pi';

const Education = () => {
  return (
    <div className='flex flex-col gap-5'>
      <SkillCard
        title='B.S.c in CSE'
        company='Bangladesh University of Business & Technology'
        duration='Jan 2022 - Running'
        details='A Passionate Software Developer, Entrepreneur and Programmer. I love to play with coding, building software, and focusing on learning new technologies.'
        Icon={PiStudentLight}
        border='via-pink-500'
        color='text-pink-500'
        bg='bg-pink-500/30'
      />

      <SkillCard
        title='Diploma in Computer Engineering'
        company='City Polytechnic Institute'
        duration='Jan 2018 - Dec 2022'
        details='A Passionate Software Developer, Entrepreneur and Programmer. I love to play with coding, building software, and focusing on learning new technologies.'
        Icon={PiStudentLight}
      />
    </div>
  );
};

export default Education;
