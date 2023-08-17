import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wallet } from "@solana/wallet-adapter-react";

interface MintButtonProps {
  onClick: () => void,
  isWalletReady: () => boolean,
  isDisabled: boolean,
  isConnected: boolean,
  wallet: Wallet,
}

export default function MintButton(props: MintButtonProps) {
  const handleMintNft = function () {
    if (!props.onClick || props.isDisabled) return;
    props.onClick();
  };

  var truncateString = function (string: string) {
    return `${string.substring(0, 4)}...${string.substring(39, 43)}`;
  };

  var getWalletText = function () {
    var walletButtonText = !props.isWalletReady()
      ? 'Conectar Wallet'
      : truncateString(props.wallet.adapter.publicKey?.toString() ?? '');
    return walletButtonText;
  };

  var renderMustConnectButton = function() {
    if (props.isConnected) return;
    return(
      <WalletMultiButton>
        <a className="btn-main btn-wallet">
          <i className="icon_wallet_alt"></i>
          <span>{getWalletText()}</span>
        </a>
      </WalletMultiButton>
    );
  };

  var renderMintButton = function() {
    if (!props.isConnected) return;
    var isDisabledClass = props.isDisabled ? 'disabled' : '';
    return (
      <button
        className={isDisabledClass + ' btn-main btn-lg not-transparent'}
        onClick={handleMintNft}>
          Obtener NFT
      </button>
    );
  };

  return (
    <>
      {renderNotConnectButton()}
      {renderMustConnectButton()}
    </>
  )
}
