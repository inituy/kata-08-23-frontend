import React, { useEffect } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wallet, useWallet } from "@solana/wallet-adapter-react";
import styles from './custom-connect-wallet-button.module.css';

interface WalletButtonProps {
  viewmodel: MainViewmodel
}

export default function WalletButton(props: WalletButtonProps) {
  const  { wallet, connected, connecting }  = useWallet();
  console.log('wallet', wallet);
  useEffect(() => {
    if (!connected || connecting) return;
    console.log('paso', connected);
    props.viewmodel.startLoginWithPhantom({
      wallet: wallet,
      attemptNumber: Math.random().toString()
    });
  }, [connected]);

  const truncateString = function (wallet: Wallet) {
    const pubkey = wallet?.adapter.publicKey?.toString();
    if (!pubkey) return;
    return (
      <p className={styles.text_connected}><span>{`${pubkey.substring(0, 4)}...${pubkey.substring(39, 43)}`}</span></p>
    );
  };

  const getWalletText = function () {
    const walletButtonText = !wallet
      ? 'Conectar Wallet'
      : truncateString(wallet);
    return walletButtonText;
  };

  const loginUser = () => {
    if (!wallet) return;
  };

  const renderMustConnectButton = function() {
    return(
      <WalletMultiButton onClick={loginUser}>
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
