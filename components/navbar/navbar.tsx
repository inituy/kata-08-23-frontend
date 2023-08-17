import React, { useEffect } from 'react'
import styles from './navbar.module.css';
import dynamic from 'next/dynamic';
import MainViewmodel from '@/viewmodels/index';

const CustomConnectWalletButton = dynamic(() => import('../custom-connect-wallet-button/custom-connect-wallet-button'), { ssr: false });

export default function Navbar(props: { viewmodel: MainViewmodel }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>NFT Loyalty Program</p>
      <CustomConnectWalletButton viewmodel={props.viewmodel}/>
    </div>
  );
};
