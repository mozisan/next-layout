import type { NextPage } from "next";

import type { NextPageWithLayout, PageLayout } from "./_next_types";

export const defineLayout =
  (layout: PageLayout) =>
  <P = {}, IP = P>(page: NextPage<P, IP>): NextPageWithLayout<P, IP> => {
    const pageWithLayout: NextPageWithLayout<P, IP> = page;
    pageWithLayout.getLayout = layout;

    return pageWithLayout;
  };
