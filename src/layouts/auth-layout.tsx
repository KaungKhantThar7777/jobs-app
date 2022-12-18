import {
  Box,
  Center,
  Container,
  Heading,
  Stack,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { Link } from '@/components/link';

type AuthLayoutProps = {
  title: string;
};
export const AuthLayout = ({
  title,
  children,
}: PropsWithChildren<AuthLayoutProps>) => {
  return (
    <Center h="full">
      <Container maxW="lg">
        <Stack
          p="8"
          bg="white"
          boxShadow="md"
          borderRadius="xl"
        >
          <Stack spacing="6">
            <Heading textAlign="center">{title}</Heading>
            {children}
          </Stack>

          <Box mt="8" textAlign="center">
            <Link href="/">Jobs App</Link>
          </Box>
        </Stack>
      </Container>
    </Center>
  );
};
