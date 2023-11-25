import React from "react";
import { HeaderButton, HeaderButtonContainer, HeaderContainer, HeaderGrid, HeaderLogo,HeaderMenuItem, HeaderMenuItemGrid } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderGrid>
        <HeaderLogo>BabySym</HeaderLogo>
        <HeaderMenuItemGrid>
          <HeaderMenuItem>Home</HeaderMenuItem>
          <HeaderMenuItem>Search</HeaderMenuItem>
          <HeaderMenuItem>Custom collections</HeaderMenuItem>
          <HeaderMenuItem>Votes</HeaderMenuItem>
        </HeaderMenuItemGrid>
        <HeaderButtonContainer>
        <HeaderButton>Connect Wallet</HeaderButton>
        </HeaderButtonContainer>
       
      </HeaderGrid>
    </HeaderContainer>
  );
};

export default Header;
