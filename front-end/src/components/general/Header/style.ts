import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    rgba(19, 8, 42, 0.5) 100%,
    rgba(126, 126, 126, 0.5) 0%
  );
`;

export const HeaderGrid = styled.div`
  width: 1280px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  text-align: left;
  font-size: 24px;
  font-weight: 700 !important;
  color: white;
`;

export const HeaderMenuItemGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: fit-content(25%) fit-content(25%) fit-content(25%) fit-content(25%);
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

export const HeaderMenuItem = styled.div`
  width: fit-content;
  text-align: center;
  font-size: 14px;
  color: white;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #7879f1;
  }
`;

export const HeaderButtonContainer = styled.div`
  width: 100%;
  text-align: right;
  font-size: 14px;
  color: white;
`;

export const HeaderButton = styled.button`
  width: fit-content;
  text-align: center;
  font-size: 14px;
  color: white;
  background: #7879f1;
  padding: 12px 24px;
  border-radius: 32px;
  border: none;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: white;
    outline: 1px solid white;
    background: transparent;
  }
`;
