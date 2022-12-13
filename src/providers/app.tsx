import {
  ChakraProvider,
  GlobalStyle,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { theme } from '@/config/theme';

export const AppProvider = ({
  children,
}: PropsWithChildren) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ChakraProvider>
  );
};
