import styled from "styled-components";
import { CustomCollectionDualItem } from "../CollectionById/style";

export const VoteContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: black;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  padding: 8px 32px;
  background: white;
  border-radius: 6px;
  @media (max-width: 430px) {
    font-size: 10px;
  }
`;

export const VoteStarsContainer = styled(CustomCollectionDualItem)`
  > svg {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

interface StarProps {
  isFilled: boolean;
}
