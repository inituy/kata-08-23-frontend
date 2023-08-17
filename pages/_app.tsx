import './globals.css';
import React from 'react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NFT Loyalty',
  description: 'NFT Loyalty program built on kata session of august 2023',
}

function MyApp({ Component, pageProps }: any) {

  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  );
};

export default MyApp;