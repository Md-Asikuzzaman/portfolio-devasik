import { activeSectionContext } from '@/context/activeSectionContext';
import { useContext } from 'react';

export const useActiveSection = () => {
  const context = useContext(activeSectionContext);

  if (context === null) {
    throw new Error('Active section context is null!');
  }

  return context;
};
