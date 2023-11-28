import styled from "styled-components";

export const CollectionContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  > div {
    padding: 120px 64px;
    width: 1280px;
    @media (max-width: 435px) {
      padding: 80px 20px;
    }

    > h1 {
      font-size: 48px;
      font-weight: 700;
      text-align: left;
      color: white;
      @media (max-width: 435px) {
        font-size: 38px;
      }
    }
  }
`;

export const CollectionDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 22px;
  border-bottom: 1px solid rgba(238, 237, 237, 0.15);
`;

export const CollectionTitle = styled.h1`
  text-align: left;
  color: white;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`;

export const CollectionItem = styled.div`
  text-align: left;
  color: white;
  font-size: 16px;
  text-align: justify;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;

export const CustomCollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 22px 0;
  border-bottom: 1px solid rgba(238, 237, 237, 0.15);
`;

export const CustomCollectionDualItem = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 0.5rem 0 0 0;
  > div {
    width: 100%;
  }
`;

export const CustomCollectionButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const CustomCollectionButton = styled.div`
  width: fit-content;
  text-align: center;
  font-size: 12px;
  color: #7879f1;
  background: white;
  padding: 8px 32px;
  border-radius: 32px;
  border: none;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: white;
    background: #7879f1;
  }
`;

// GRID NFTS

export const ListNFTContainer = styled.div`
  padding: 42px 0;
`;

export const CardNFTContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 22px 0;
  border-bottom: 1px solid rgba(238, 237, 237, 0.15);
  background: #2b2b2b;
`;

export const CardNFTImageContainer = styled.div`
  box-sizing: border-box;
  height: fit-content;
  background: red;
  border-radius: 16px 16px 0 0;
`;

export const CardNFTDataContainer = styled.div`
  padding: 22px 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardNFTTitle = styled.div`
  text-align: left;
  color: white;
  font-family: "Radio Canada", sans-serif;
  font-size: 16px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

export const CardNFTData = styled.div`
  text-align: left;
  color: white;
  font-family: "Radio Canada", sans-serif;
  font-size: 16px;
  @media (max-width: 1000px) {
    font-size: 12px;
  }
`;
