import type { NextPage } from "next";
import type { ReactElement } from "react";

declare module "next" {
  export type PageLayout = (page: ReactElement) => ReactElement;
  export type NextPageWithLayout = NextPage & { getLayout?: PageLayout };
}
