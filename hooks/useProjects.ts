import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

interface DataType {
  id: string;
  title: string;
  description: string;
  image: string;
  website: string;
  github: string;
  variant: string;
}

interface HookType {
  data: DataType[];
  isLoading: boolean;
  error: string;
  mutate: any;
}

const useProjects = (): HookType => {
  const { data, isLoading, error, mutate } = useSWR('/api/projects', fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export default useProjects;
