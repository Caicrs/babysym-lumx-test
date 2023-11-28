import React from "react";
import styled from "styled-components";
import CloseIcon from "../../assets/close-icon";

interface ModalContainerProps {
  isOpen: boolean;
}

const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background: ${({ isOpen }) =>
    isOpen ? "rgba(0, 0, 0, 0.8)" : "transparent"};
  z-index: 999;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.3s ease-out;
  justify-content: center;
  align-items: center;
  background-filter: ${({ isOpen }) =>
    isOpen ? "blur(6px) saturate(180%)" : "blur(0px) saturate(180%)"};
  z-index: 999;
  -webkit-backdrop-filter: ${({ isOpen }) =>
    isOpen ? "blur(6px) saturate(180%)" : "blur(0px) saturate(180%)"};
`;

const ModalContainer2 = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ModalContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 12px 22px;
  border-radius: 6px;
  background: white;
  color: black;
  @media (min-width: 800px) {
    width: 580px;
  }
`;

const ModalCloseIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  > svg {
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }

  > div {
    width: 100%;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
  }
`;

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const ModalBase = ({ title, isOpen, onClose, children }: ModalProps) => {
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <ModalCloseIcon>
          <div>{title}</div>
          <CloseIcon onClose={onClose} />
        </ModalCloseIcon>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalBase;
