import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wallet, useWallet } from "@solana/wallet-adapter-react";
import styles from './custom-connect-wallet-button.module.css';

export default function MintButton() {
  const { wallet } = useWallet();

  const truncateString = function (wallet: Wallet) {
    const pubkey = wallet?.adapter.publicKey?.toString();
    if (!pubkey) return;
    return (
      <p className={styles.text_connected}><span>{`(${pubkey.substring(0, 4)}...${pubkey.substring(39, 43)})`}</span></p>
    );
  };

  const getWalletText = function () {
    const walletButtonText = !wallet
      ? 'Conectar Wallet'
      : truncateString(wallet);
    return walletButtonText;
  };

  const renderMustConnectButton = function() {
    return(
      <WalletMultiButton>
        <a className="btn-main btn-wallet">
          <i className="icon_wallet_alt"></i>
          <span>{getWalletText()}</span>
        </a>
      </WalletMultiButton>
    );
  };


  return (
    <React.Fragment>
      {renderMustConnectButton()}
    </React.Fragment>
  );
};
