import type { NextPage } from "next";

import type { NextPageWithLayout, PageLayout } from "./_next_types";

export const defineLayout =
  (layout: PageLayout) =>
  (page: NextPage): NextPageWithLayout => {
    const pageWithLayout: NextPageWithLayout = page;
    pageWithLayout.getLayout = layout; // eslint-disable-line functional/immutable-data

    return pageWithLayout;
  };
