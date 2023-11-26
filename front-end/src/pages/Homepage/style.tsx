import styled from "styled-components";

export const HomepageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  > div {
    width: 1280px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 64px;
`;

export const RightSide = styled.div``;

export const WhiteTitle = styled.div`
  color: white;
  font-family: "Radio Canada", sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
`;

export const PurpleTitle = styled.div`
  color: #7879f1;
  font-family: "Radio Canada", sans-serif;
  font-size: 52px;
  font-weight: 700;
  text-align: center;
`;

export const PurpleDescription = styled.div`
  color: #9f8fc1;
  font-family: "Radio Canada", sans-serif;
  font-size: 16px;
  text-align: left;
  font-weight: 300;
  padding-top: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding-top: 2rem;
`;

export const ButtonSearch = styled.div`
  border-radius: 0.5rem;

  font-family: "Radio Canada", sans-serif;
  font-size: 0.8rem;
  padding: 12px 42px;
  border-radius: 32px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  color: #7879f1;
  outline: 1px solid #7879f1;
  background: transparent;
  &:hover {
    color: white;
    background: #7879f1;
  }
`;

export const Analytics = styled.div`
  display: flex;
  padding-top: 30%;
  justify-content: space-between;
  gap: 22px;
  align-items: center;
`;

export const AnalyticItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AnalyticTitle = styled.div`
  color: #7879f1;
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  font-weight: 700;
`;

export const AnalyticDescription = styled.div`
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 500;
`;

export const Line = styled.div`
  width: 1px;
  height: 2.5rem;
  background: #7879f1;
`;

export const ImageAsset = styled.img`
  height: 35rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
