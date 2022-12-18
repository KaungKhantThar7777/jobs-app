import { InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import { Button } from '@/components/button';
import { Link } from '@/components/link';
import { useAuthUser, useLogout } from '@/features/auth';

export const DashboardLayout = ({
  children,
}: PropsWithChildren) => {
  const user = useAuthUser();

  return (
    <Box as="section" h="100vh" overflowY="auto">
      <Navbar />
      <Container as="main" maxW="container.lg" py="12">
        {children}
      </Container>

      <Box py="8" textAlign="center">
        <Link
          href={`/organizations/${user.data?.organizationId}`}
        >
          View Public Organization Page
        </Link>
      </Box>
    </Box>
  );
};

const Navbar = () => {
  const router = useRouter();
  const logout = useLogout({
    onSuccess: () => router.push('/auth/login'),
  });
  return (
    <Box as="nav" bg="primary" color="primaryAccent">
      <Container maxW="container.lg" size="3xl" py="3">
        <Flex justify="space-between">
          <HStack>
            <Link variant="solid" href="/">
              Jobs App
            </Link>
            <HStack spacing="1">
              <Link
                icon={<InfoOutlineIcon />}
                variant="solid"
                href="/dashboard/jobs"
              >
                Jobs
              </Link>
            </HStack>
          </HStack>
          <HStack>
            <Button
              variant="outline"
              isDisabled={logout.isLoading}
              isLoading={logout.isLoading}
              onClick={() => logout.submit()}
            >
              Log out
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
