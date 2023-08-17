import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react'
import styles from './login-modal.module.css';

export default function LoginModal() {
  const { connected } = useWallet();
  if (connected) return;

  return (
    <div className={styles.modal}>
      HOLA
    </div>
  );
};
