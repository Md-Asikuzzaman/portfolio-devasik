'use client';

import { useState } from 'react';

import AboutMe from './tab-options/AboutMe';
import Skill from './tab-options/Skill';
import Experience from './tab-options/Experience';
import Education from './tab-options/Education';
import TabButton from './TabButton';

const Tab = () => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <div className='col-start-2 col-end-4'>
      <div className='text-sm font-medium text-center text-zinc-400'>
        <div className='flex flex-wrap gap-2 mb-8 lg:mb-12'>
          <TabButton
            title='About Me'
            tabValue={1}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />

          <TabButton
            title='Skill'
            tabValue={2}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <TabButton
            title='Experience'
            tabValue={3}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />

          <TabButton
            title='Education'
            tabValue={4}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </div>
      </div>
      {currentTab == 1 && <AboutMe />}
      {currentTab == 2 && <Skill />}
      {currentTab == 3 && <Experience />}
      {currentTab == 4 && <Education />}
    </div>
  );
};

export default Tab;
