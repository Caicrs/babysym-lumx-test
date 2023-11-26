import styled from "styled-components";

export const HeaderContainer = styled.header`
  z-index: 1000;
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

// DESKTOP COMPONENTS

export const HeaderGrid = styled.div`
  width: 100%;
  max-width: 1280px;
  box-sizing: border-box;
  padding: 20px 64px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    display: none;
    visibility: hidden;
  }
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
  grid-template-columns: fit-content(25%) fit-content(25%) fit-content(25%) fit-content(
      25%
    );
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

// MOBILE COMPONENTS

export const HeaderGridMobile = styled.div`
  width: 1280px;
  padding: 20px 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  @media (max-width: 435px) {
    padding: 20px;
  }
  @media (min-width: 1000px) {
    display: none;
    visibility: hidden;
  }
`;

export const HeaderMenuButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > i {
    font-size: 24px;
    color: white;
  }
`;

interface SidebarProps {
  isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100%;
  background: #7879f1;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 42px;
  padding: 20px 0;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }

  @media (min-width: 1000px) {
    display: none;
    visibility: hidden;
  }
`;

export const SidebarItem = styled.div`
  text-align: left;
  padding: 0 20px;
`;

export const CloseSidebarItem = styled.div`
  width: 90%;
  text-align: right;
  padding: 0 20px;
`;
