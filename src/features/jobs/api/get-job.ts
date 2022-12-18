import { useQuery } from 'react-query';

import { apiClient } from '@/lib/api-client';

import { Job } from '../types';

type GetJobOptions = {
  jobId: string;
};

export const getJob = ({
  jobId,
}: GetJobOptions): Promise<Job> => {
  return apiClient.get(`/jobs/${jobId}`);
};

export const useJob = ({ jobId }: GetJobOptions) => {
  const { data, isLoading } = useQuery({
    queryKey: ['job', jobId],
    queryFn: () => getJob({ jobId }),
    enabled: !!jobId,
  });

  return {
    data,
    isLoading,
  };
};
