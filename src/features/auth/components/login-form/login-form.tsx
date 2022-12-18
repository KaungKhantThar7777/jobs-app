import { Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/button';
import { InputField } from '@/components/form';

import { useLogin } from '../../api/login';
import { LoginData } from '../../types';

export type LoginFormProps = {
  onSuccess?: () => void;
};

export const LoginForm = ({
  onSuccess,
}: LoginFormProps) => {
  const login = useLogin({
    onSuccess,
  });

  const { register, handleSubmit, formState } =
    useForm<LoginData>();

  const onSubmit = (data: LoginData) => {
    login.submit(data);
  };

  return (
    <Stack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      spacing="5"
      w="full"
    >
      <InputField
        type="email"
        label="Email"
        {...register('email', {
          required: true,
        })}
        error={formState.errors['email']}
      />

      <InputField
        type="password"
        label="Password"
        {...register('password', {
          required: true,
        })}
        error={formState.errors['password']}
      />

      <Button
        isLoading={login.isLoading}
        isDisabled={login.isLoading}
        type="submit"
      >
        Log in
      </Button>
    </Stack>
  );
};
