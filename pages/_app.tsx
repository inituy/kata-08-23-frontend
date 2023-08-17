import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import Viewmodel from '@/viewmodels/index';
import WalletConnectionProvider from '@/helpers/wallet-provider';

export const metadata: Metadata = {
  title: 'NFT Loyalty',
  description: 'NFT Loyalty program built on kata session of august 2023',
}

function MyApp({ Component, pageProps }: any) {
  const sdk = { startLoginWithPhantom: setTimeout(() => { message: 'success' }, 500) };
  const auth = new Viewmodel(sdk);
  return (
    <WalletConnectionProvider>
      <Component {...pageProps} />
    </WalletConnectionProvider>
  );
};

export default MyApp;