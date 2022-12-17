import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ReactNode, ReactElement } from 'react';

import { API_MOCKING } from '@/config/constants';
import { AppProvider } from '@/providers/app';

const MSWWrapper = dynamic(() =>
  import('@/lib/msw').then(({ MSWWrapper }) => MSWWrapper)
);

type NextPagewithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPagewithLayout;
};

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => page);

  const pageContent = getLayout(
    <Component {...pageProps} />
  );
  return (
    <AppProvider>
      {API_MOCKING ? (
        <MSWWrapper>{pageContent}</MSWWrapper>
      ) : (
        pageContent
      )}
    </AppProvider>
  );
}
