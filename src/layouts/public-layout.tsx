import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const PublicLayout = ({
  children,
}: PropsWithChildren) => {
  return (
    <Box maxW="container.lg" mx="auto" h="full">
      <Box minH="80%" mx="4">
        {children}
      </Box>
      <Box py="8" textAlign="center">
        Powered by <Link href="/">Jobs App</Link>
      </Box>
    </Box>
  );
};
