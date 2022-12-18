import {
  ChakraProvider,
  GlobalStyle,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Notifications } from '@/components/notifications';
import { theme } from '@/config/theme';
import { queryClient } from '@/lib/react-query';

export const AppProvider = ({
  children,
}: PropsWithChildren) => {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary
        fallback={<div>Something went wrong!</div>}
        onError={console.error}
      >
        <GlobalStyle />
        <Notifications />

        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
        </QueryClientProvider>
      </ErrorBoundary>
    </ChakraProvider>
  );
};
