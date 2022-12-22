import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { PropsWithChildren, useEffect } from 'react';

import { Loading } from '@/components/loading';

import { useAuthUser } from '../../api/get-auth-user';

export const Protected = ({
  children,
}: PropsWithChildren) => {
  const { asPath, replace } = useRouter();

  const user = useAuthUser();

  useEffect(() => {
    if (!user.data && !user.isLoading) {
      replace(
        `/auth/login?redirect=${asPath}`,
        undefined,
        {
          shallow: true,
        }
      );
    }
  }, [user, asPath, replace]);

  if (user.isLoading) {
    return (
      <Flex direction="column" justify="center" h="full">
        <Loading />
      </Flex>
    );
  }

  if (!user.data && !user.isLoading) return null;

  return <>{children}</>;
};
