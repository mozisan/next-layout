import type { NextPage } from "next";
import type { ReactElement } from "react";

export type PageLayout = (page: ReactElement) => ReactElement;

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: PageLayout; // eslint-disable-line functional/prefer-readonly-type
};
