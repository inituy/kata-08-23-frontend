import React, { ReactNode, useMemo } from "react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  SolletExtensionWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
require('@solana/wallet-adapter-react-ui/styles.css');

interface ProviderProps {
  children: ReactNode
}

const WalletConnectionProvider = ({ children }: ProviderProps) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network: WalletAdapterNetwork = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default WalletConnectionProvider;
