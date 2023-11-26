/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, createContext, useState } from "react";

interface ContextProps {
  isOpenState: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GeneralContext = createContext<ContextProps>({} as ContextProps);

export const GeneralProvider = ({ children }: any) => {
  const [isOpenState, setIsOpen] = useState(false);

  return (
    <GeneralContext.Provider
      value={{
        isOpenState,
        setIsOpen,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneral = (): ContextProps => useContext(GeneralContext);
