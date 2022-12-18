import { Box, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';

import { useCreateJob } from '../../api/create-job';
import { CreateJobData } from '../../types';

export type CreateJobFormProps = {
  onSuccess: () => void;
};

export const CreateJobForm = ({
  onSuccess,
}: CreateJobFormProps) => {
  const createJob = useCreateJob({
    onSuccess,
  });
  const { register, handleSubmit, formState } =
    useForm<CreateJobData>();

  const onSubmit = (data: CreateJobData) => {
    createJob.submit({ data });
  };
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
          {...register('position', { required: true })}
          error={formState.errors['position']}
        />
        <InputField
          label="Department"
          {...register('department', { required: true })}
          error={formState.errors['department']}
        />
        <InputField
          label="Location"
          {...register('location', { required: true })}
          error={formState.errors['location']}
        />
        <InputField
          type="textarea"
          label="Info"
          {...register('info', { required: true })}
          error={formState.errors['info']}
        />

        <Button
          isDisabled={createJob.isLoading}
          isLoading={createJob.isLoading}
          type="submit"
        >
          Create
        </Button>
      </Stack>
    </Box>
  );
};
