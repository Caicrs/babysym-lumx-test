/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, createContext, useState, useEffect } from "react";
import Loading from "../components/loading";
import ModalBase from "../components/modalBase";
import SubmodalShareLink from "../components/submodal-share-link";
import { useSDK } from "@metamask/sdk-react";
import { ethers } from "ethers";

interface ContextProps {
  isOpenState: boolean;
  modalOpened: ModalOpenedProps;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpened: React.Dispatch<React.SetStateAction<ModalOpenedProps>>;
  wallet: WalletProps;
  setWallet: React.Dispatch<React.SetStateAction<WalletProps>>;
  connectWallet: () => void;
}
export interface ModalOpenedProps {
  opened: boolean;
  body: React.JSX.Element;
}

interface WalletProps {
  address?: string;
  balance?: string | null;
}

export const GeneralContext = createContext<ContextProps>({} as ContextProps);

export const GeneralProvider = ({ children }: any) => {
  const [isOpenState, setIsOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [modalOpened, setIsModalOpened] = useState({
    opened: false,
    title: "Share link",
    body: <SubmodalShareLink />,
  });

  // usetstate for storing and retrieving wallet details
  const [wallet, setWallet] = useState<WalletProps>({
    address: "",
    balance: null,
  });

  // Button handler button for handling a
  // request event for metamask
  const connectWallet = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum.request({ method: "eth_requestAccounts" }).then(
        (res) => getbalance(res) // accountChangeHandler(res[0])
      ).catch((err) => {console.log(err)});
    } else {
      setIsModalOpened({
        title: "Alert",
        opened: true,
        body: <h3 style={{textAlign:'start'}}>Install the metamask extension</h3>,
      })
    }
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address: any) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address[0], "latest"],
      })
      .then((balance: any) => {
        // Setting balance
        setWallet({
          address: address[0],
          balance: ethers.formatEther(balance),
        });
      });
  };

  useEffect(() => {
    if (wallet.address == "") {
      connectWallet();
    }
  });

  return (
    <GeneralContext.Provider
      value={{
        connectWallet,
        wallet,
        setWallet,
        modalOpened,
        isOpenState,
        setIsOpen,
        setIsModalOpened,
      }}
    >
      {loading ? <Loading /> : children}
      <ModalBase
        isOpen={modalOpened.opened}
        title={modalOpened.title}
        onClose={() =>
          setIsModalOpened({
            title: "Only test 2",
            opened: false,
            body: <></>,
          })
        }
      >
        {modalOpened.body}
      </ModalBase>
    </GeneralContext.Provider>
  );
};

export const useGeneral = (): ContextProps => useContext(GeneralContext);
