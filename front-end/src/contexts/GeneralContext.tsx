/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, createContext, useState } from "react";
import Loading from "../components/loading";
import ModalBase from "../components/modalBase";

interface ContextProps {
  isOpenState: boolean;
  modalOpened: ModalOpenedProps;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsModalOpened: React.Dispatch<React.SetStateAction<ModalOpenedProps>>;
}
export interface ModalOpenedProps {
  opened: boolean;
  body: React.JSX.Element;
}

export const GeneralContext = createContext<ContextProps>({} as ContextProps);

export const GeneralProvider = ({ children }: any) => {
  const [isOpenState, setIsOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [modalOpened, setIsModalOpened] = useState({
    opened: true,
    body: <h1>TEST 1</h1>,
  });

  return (
    <GeneralContext.Provider
      value={{
        modalOpened,
        isOpenState,
        setIsOpen,
        setIsModalOpened,
      }}
    >
      {loading ? <Loading /> : children}
      <ModalBase
        isOpen={modalOpened.opened}
        onClose={() =>
          setIsModalOpened({
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
