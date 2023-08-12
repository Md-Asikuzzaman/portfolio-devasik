'use client';

import { useState, ReactNode, createContext } from 'react';
import { NextPage } from 'next';

interface Props {
  children: ReactNode;
}

interface ContextType {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}

export const activeSectionContext = createContext<ContextType | null>(null);

const ActiveSectionContextProvider: NextPage<Props> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <activeSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </activeSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;
