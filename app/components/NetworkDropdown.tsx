import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const NETWORKS = [
  {
    name: "Ethereum",
    imgUrl: "/assets/images/eth.png",
    network: "ethereum",
  },
  {
    name: "Polygon",
    imgUrl: "/assets/images/polygon.svg",
    network: "polygon",
  },
  {
    name: "Optimism",
    imgUrl: "/assets/images/optimism.svg",
    network: "optimism",
  },
  {
    name: "Arbitrum",
    imgUrl: "/assets/images/arbitrum.svg",
    network: "arbitrum",
  },
  {
    name: "Celo",
    imgUrl: "/assets/images/celo.svg",
    network: "celo",
  },
  {
    name: "BNB Chain",
    imgUrl: "/assets/images/bnbchain.svg",
    network: "bnbchain",
  },
] as Networks;

type Networks = {
  name: string;
  imgUrl: string;
  network: NetworkDropdownProps["selectedNetwork"];
}[];

export type selectedNetwork =
  | "ethereum"
  | "polygon"
  | "optimism"
  | "arbitrum"
  | "celo"
  | "bnbchain";

interface NetworkDropdownProps {
  selectedNetwork: selectedNetwork;
  onClick: (network: NetworkDropdownProps["selectedNetwork"]) => void;
}

export default function NetworkDropdown({
  selectedNetwork,
  onClick,
}: NetworkDropdownProps) {
  const networkImgUrl = NETWORKS.find(
    (network) => network.network === selectedNetwork,
  )?.imgUrl;

  return (
    <div className="hidden sm:flex">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className=" flex h-10 w-[60px] items-center justify-center gap-2 rounded-lg text-uns-light-blue transition duration-[250ms] hover:bg-uns-blue-gray">
            <img
              src={networkImgUrl}
              alt={selectedNetwork}
              className="h-5 w-5 max-w-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#98A1C0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-60 origin-top-right justify-between rounded-xl border border-uns-blue-11 bg-uns-blue-10 py-2 shadow-dropdown focus:outline-none sm:bottom-auto sm:top-14">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 px-2">
                {NETWORKS.map((network) => (
                  <Menu.Item key={network.network}>
                    <button
                      className="grid w-full grid-cols-[min-content_1fr_min-content] items-center whitespace-nowrap rounded-xl p-2 text-left tracking-wide transition duration-[250ms] hover:bg-uns-blue-gray"
                      onClick={() => onClick(network.network)}
                    >
                      <img
                        src={network.imgUrl}
                        alt={network.name}
                        className="mr-3 h-5 w-5 max-w-none"
                      />
                      <div>{network.name}</div>
                      <div>
                        {selectedNetwork === network.network ? (
                          <svg
                            width="20"
                            height="20"
                            color="#4C82FB"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.6693 5.33789L7.5026 14.3175L3.33594 10.2358"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        ) : null}
                      </div>
                    </button>
                  </Menu.Item>
                ))}
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
