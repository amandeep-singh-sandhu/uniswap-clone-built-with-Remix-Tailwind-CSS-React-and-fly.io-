import type { MetaFunction } from "@remix-run/node";
import { useRef } from "react";

import Banner from "~/components/Banner";
import CTA from "~/components/CTA";
import Features from "~/components/Features";
import Footer from "~/components/Footer";

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
    <div className="min-h-screen pb-20 pt-[72px]">
      <div
        data-testid="landing-page"
        className="absolute top-0 z-10 flex w-full flex-col items-center scroll-smooth bg-gradient-to-b from-uns-blue-3 from-0% to-uns-blue-4 to-45% pt-16"
      >
        <Banner onLearnMoreClick={scrollToFeatures} />
        <div className="z-10 flex w-full flex-col items-center from-black from-[0.16%] to-uns-blue-7 to-[99.85%] bg-gradient-[179.82deg] md:px-24 md:pb-20">
          <Features ref={ref} />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}
