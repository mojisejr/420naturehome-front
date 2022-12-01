import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
// import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export const bitkubchain = {
  id: 96,
  name: "Bit Kub",
  network: "bitkubchain",
  nativeCurrency: {
    decimals: 18,
    name: "KUB",
    symbol: "KUB",
  },
  rpcUrls: {
    default: "https://rpc.bitkubchain.io",
  },
  blockExplorers: {
    default: { name: "BKCScan", url: "https://bkcscan.com" },
  },
  testnet: false,
};

export const bitkubchain_testnet = {
  id: 25925,
  name: "Bitkub Testnet",
  network: "bitkub chain testnet",
  nativeCurrency: {
    decimals: 18,
    name: "KUB",
    symbol: "KUB",
  },
  rpcUrls: {
    default: "https://rpc-testnet.bitkubchain.io",
  },
  blockExplorers: {
    default: { name: "BKCScan", url: "https://testnet.bkcscan.com" },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [bitkubchain_testnet],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "420NatureHome",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
