import { useMutation } from 'react-query';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

type DeleteJobOptions = {
  jobId: string;
};

export const deleteJob = async ({
  jobId,
}: DeleteJobOptions) => {
  return apiClient.delete(`/jobs/${jobId}`);
};

export const useDeleteJob = ({
  onSuccess,
}: {
  onSuccess?: () => void;
} = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      queryClient.invalidateQueries('jobs');
      onSuccess?.();
    },
  });

  return { submit, isLoading };
};
