import type { NextPage } from "next";
import type { ReactElement } from "react";

export type PageLayout = (page: ReactElement) => ReactElement;
export type NextPageWithLayout = NextPage & { getLayout?: PageLayout }; // eslint-disable-line functional/prefer-readonly-type
