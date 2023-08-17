import React from 'react'
import styles from './navbar.module.css';
import dynamic from 'next/dynamic';
const CustomConnectWalletButton = dynamic(() => import('../custom-connect-wallet-button/custom-connect-wallet-button'), { ssr: false });

export default function Navbar() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>NFT Loyalty Program</p>
      <CustomConnectWalletButton />
    </div>
  )
}
