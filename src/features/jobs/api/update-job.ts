import { useMutation } from 'react-query';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

import { Job, MutateJobData } from '../types';

export const updateJob = ({
  jobId,
  data,
}: {
  jobId: string;
  data: MutateJobData;
}): Promise<Job> => {
  return apiClient.patch(`/jobs/${jobId}`, data);
};

export const useUpdateJob = ({
  onSuccess,
}: {
  onSuccess?: (data: Job) => void;
}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: updateJob,
    onSuccess: (data) => {
      queryClient.invalidateQueries(['jobs']);
      onSuccess?.(data);
    },
  });

  return { submit, isLoading };
};
