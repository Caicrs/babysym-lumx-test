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

export const CommentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommentSubContainer = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid white;
  font-size: 12px;
`;

interface StarProps {
  isFilled: boolean;
}
