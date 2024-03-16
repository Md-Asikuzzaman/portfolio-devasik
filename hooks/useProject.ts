import fetcher from '@/lib/fetcher';
import useSWR from 'swr';

interface HookType {
  data: ProjectType;
  isLoading: boolean;
  error: string;
  mutate: any;
}

const useProject = (id: string): HookType => {
  const { data, isLoading, error, mutate } = useSWR(
    id && `/api/projects/${id}`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    data,
    isLoading,
    error,
    mutate,
  };
};

export default useProject;
