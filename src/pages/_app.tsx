import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactNode, ReactElement } from 'react';

import { AppProvider } from '@/providers/app';

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
  return <AppProvider>{pageContent}</AppProvider>;
}
