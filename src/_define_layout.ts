import type { NextPage, NextPageWithLayout, PageLayout } from "next";

export const defineLayout =
  (layout: PageLayout) =>
  (page: NextPage): NextPageWithLayout => {
    const pageWithLayout: NextPageWithLayout = page;
    pageWithLayout.getLayout = layout; // eslint-disable-line functional/immutable-data

    return pageWithLayout;
  };
