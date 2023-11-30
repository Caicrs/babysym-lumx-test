import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";

interface SubmodalShareLinkProps {
  link?: string;
  isCopied?: boolean;
}

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const SubmodalShareLinkContainer = styled.div`
  padding: 0;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  color: #000;
  margin-bottom: 12px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.75;
  }
`;

const Link = styled.div`
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Icon = styled.div<SubmodalShareLinkProps>`
   width:20%;
  text-align: right;
  > i {
    color: #7879f1;
    font-size: 18px;
  }
  ${({ isCopied }) =>
    isCopied &&
    css`
      animation: ${fadeInOut} 0.6s ease-in-out;
    `}
`;

const SubmodalShareLink: React.FC<SubmodalShareLinkProps> = ({
  link,
}: SubmodalShareLinkProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      // The text was successfully copied
    } catch (err) {
      // An error occurred while trying to copy text
    }
  };

  return (
    <>
      <SubmodalShareLinkContainer>
        <InputContainer onClick={() => copyToClipboard(link)}>
          <Link>{link}</Link>
          <Icon isCopied={isCopied}>
            {isCopied ? "Copied!" : <i className="fa fa-copy"></i>}
          </Icon>
        </InputContainer>
      </SubmodalShareLinkContainer>
    </>
  );
};

export default SubmodalShareLink;
