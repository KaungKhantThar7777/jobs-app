import { MSWDevTools } from 'msw-devtools';
import { PropsWithChildren } from 'react';

import { IS_DEVELOPMENT } from '@/config/constants';
import { db, handlers } from '@/testing/mocks';

require('@/testing/mocks/initialize');

export const MSWWrapper = ({
  children,
}: PropsWithChildren) => {
  return (
    <>
      {IS_DEVELOPMENT && (
        <MSWDevTools db={db} handlers={handlers} />
      )}
      {children}
    </>
  );
};
