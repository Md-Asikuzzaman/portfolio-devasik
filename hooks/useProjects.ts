import fetcher from '@/lib/fetcher';
import useSWR from 'swr';


interface HookType {
  data: ProjectType[];
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
