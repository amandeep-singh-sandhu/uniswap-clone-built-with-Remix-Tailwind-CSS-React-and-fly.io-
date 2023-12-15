import type { MetaFunction } from "@remix-run/node";

import Banner from "~/components/Banner";

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
  return (
    <div className="min-h-screen pt-[72px] pb-20">
      <div
        data-testid="landing-page"
        className="flex flex-col items-center scroll-smooth"
      >
        <Banner />
        <section className="features">Features</section>
        <section>cta</section>
        <footer>Footer</footer>
      </div>
    </div>
  );
}
