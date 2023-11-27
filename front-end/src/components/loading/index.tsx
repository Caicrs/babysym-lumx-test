import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 4px solid white;
  border-top: 4px solid #8509fc;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px) saturate(180%);
  -webkit-backdrop-filter: blur(6px) saturate(180%);
  background-color: rgba(75, 75, 75, 0.55);
`;

const Loading: React.FC = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  );
};

export default Loading;
