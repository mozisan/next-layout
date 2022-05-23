import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { FC } from "react";

import type { NextPageWithLayout } from "./_next_types";

type Props = AppProps & {
  readonly Component: NextPage | NextPageWithLayout;
};

export const PageRenderer: FC<Props> = ({ Component: Page, pageProps }) => {
  const page = <Page {...pageProps} />;

  if ("getLayout" in Page) {
    return Page.getLayout(page);
  }

  return page;
};
