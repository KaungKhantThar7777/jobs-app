import { Center, Spinner } from '@chakra-ui/react';

export const Loading = () => {
  return (
    <Center h="96">
      <Spinner
        size="xl"
        color="primary"
        data-testid="loading"
      />
    </Center>
  );
};
