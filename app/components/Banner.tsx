import { Link } from "@remix-run/react";

const Banner = () => {
  return (
    <>
      {/* Clickable Swap Links */}
      <div className="pt-[63px] px-2 z-[1]" data-testid="clickable-swap-link">
        <Link to="/swap">
          <div className="bg-black w-[464px] h-[323px] rounded-2xl"></div>
        </Link>
      </div>
      {/* Overlay blue linear gradient */}
      <div
        className="h-screen absolute z-[990] w-full bg-gradient-to-b from-uns-blue-3 from-0% to-uns-blue-4 to-45% top-0 bottom-0"
        id="overlay-blue-linear-gradient"
      ></div>
      {/* Underlying pink radial gradient */}
      <div
        className="flex justify-center absolute top-0 bottom-0 w-full h-screen"
        id="overlay-pink-radial-gradient"
      >
        <div className="bg-gradient-radial from-uns-pink-1 from-0% to-uns-blue-5 to-100% w-full h-screen max-w-[480px] blur-[72px]"></div>
      </div>
      {/* Banner Content */}
      <div className="absolute flex h-[calc(100vh-124px)] w-full max-w-[min(720px,90%)] justify-end flex-col z-[990] items-center pb-10">
        <h1 className="text-[50px] leading-[72px] text-center mb-6 font-bold bg-gradient-10 from-uns-yellow-1 from-10% to-uns-pink-2 to-100% text-transparent bg-clip-text tracking-tighter">
          Trade crypto and NFTs with confidence
        </h1>
        <div className="mb-8 text-xl font-medium tracking-wide  text-uns-light-blue">
          Buy, sell, and explore tokens and NFTs
        </div>
        <Link
          to="/swap"
          className="inline-block w-full max-w-[300px] rounded-3xl from-uns-pink-3 from-[2.66%] to-uns-pink-4 to-[98.99%] py-4 
          text-center text-xl font-medium transition duration-[250ms] bg-gradient-[93.06deg] hover:shadow-glow hover:shadow-uns-pink-3"
        >
          Get started
        </Link>
        <div className="mt-9 flex cursor-pointer items-center text-xl font-semibold text-uns-blue-6">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className=" ml-3.5 h-6 w-6"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="8 12 12 16 16 12"></polyline>
            <line x1="12" y1="8" x2="12" y2="16"></line>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Banner;
