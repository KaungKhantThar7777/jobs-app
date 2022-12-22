import { Box, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';
import { Loading } from '@/components/loading';

import { useCreateJob, useUpdateJob } from '../../api';
import { Job, MutateJobData } from '../../types';

export type JobFormProps = {
  onSuccess: () => void;
  job?: Job;
  isLoading?: boolean;
};

export const CreateUpdateJobForm = ({
  onSuccess,
  job,
  isLoading,
}: JobFormProps) => {
  const createJob = useCreateJob({
    onSuccess,
  });

  const updateJob = useUpdateJob({
    onSuccess,
  });

  const props = useForm<MutateJobData>({
    defaultValues: { status: 'draft', ...job },
  });

  const { register, handleSubmit, reset, formState } =
    props;

  useEffect(() => {
    reset(job);
  }, [job, reset]);

  const onSubmit = (data: MutateJobData) => {
    if (job) {
      updateJob.submit({
        jobId: job.id,
        data,
      });
    } else {
      createJob.submit({ data });
    }
  };

  if (isLoading) return <Loading />;
  return (
    <Box>
      <Stack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        w="full"
        spacing="8"
      >
        <InputField
          label="Position"
          {...register('position', {
            required: 'Required',
          })}
          error={formState.errors['position']}
        />
        <InputField
          label="Department"
          {...register('department', {
            required: 'Required',
          })}
          error={formState.errors['department']}
        />
        <InputField
          label="Location"
          {...register('location', {
            required: 'Required',
          })}
          error={formState.errors['location']}
        />

        <label>
          <input
            type="radio"
            value={'draft'}
            {...register('status')}
          />
          Draft
        </label>

        <label>
          <input
            type="radio"
            value="publish"
            {...register('status')}
          />
          Publish now
        </label>
        <InputField
          type="textarea"
          label="Info"
          {...register('info', {
            required: 'Required',
          })}
          error={formState.errors['info']}
        />

        <Button
          isDisabled={createJob.isLoading}
          isLoading={createJob.isLoading}
          type="submit"
        >
          {job ? 'Update' : 'Create'}
        </Button>
      </Stack>
    </Box>
  );
};
