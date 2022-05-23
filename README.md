# next-layout

## Installation

```sh
npm i -S @mozisan/next-layout
```

## Usage

```tsx
// pages/foo.tsx
import { defineLayout } from "@mozisan/next-layout";

const withLayout = defineLayout((page) => (
  <div>
    <header>...</header>
    <main>{page}</main>
  </div>
));

export default withLayout(function FooPage() {
  return <div>...</div>;
});
```

```tsx
// pages/_app.tsx
import type { AppProps } from "next/app";
import { PageRenderer } from "@mozisan/next-layout";

export default function App(props: AppProps) {
  return <PageRenderer {...props} />;
}
```
