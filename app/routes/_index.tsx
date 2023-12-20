import type { MetaFunction } from "@remix-run/node";
import { useRef } from "react";

import Banner from "~/components/Banner";
import Features from "~/components/Features";

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
  const ref = useRef<HTMLDivElement>(null);
  const scrollToFeatures = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen pt-[72px] pb-20">
      <div
        data-testid="landing-page"
        className="flex flex-col items-center scroll-smooth absolute w-full top-0 bg-gradient-to-b from-uns-blue-3 from-0% to-uns-blue-4 to-45% z-10 pt-16"
      >
        <Banner onLearnMoreClick={scrollToFeatures} />
        <div className="bg-gradient-[179.82deg] from-[0.16%] to-[99.85%] from-black to-uns-blue-7 flex flex-col w-full z-10 md:px-24 md:pb-20 items-center">
          <Features ref={ref} />
          <section>cta</section>
          <footer>Footer</footer>
        </div>
      </div>
    </div>
  );
}
