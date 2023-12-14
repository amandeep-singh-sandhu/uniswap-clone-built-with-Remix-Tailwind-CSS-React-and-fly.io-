import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Uniswap Clone" },
  {
    property: "og:title",
    content: "Uniswap Clone",
  },
  {
    name: "description",
    content:
      "This app is a uniswap clone built with tailwind css, react, remix.",
  },
];

export default function Index() {
  // const user = useOptionalUser();
  return <></>;
}
