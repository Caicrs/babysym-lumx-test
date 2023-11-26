import React, { useState } from "react";
import {
  CloseSidebarItem,
  HeaderButton,
  HeaderButtonContainer,
  HeaderContainer,
  HeaderGrid,
  HeaderGridMobile,
  HeaderLogo,
  HeaderMenuButtonContainer,
  HeaderMenuItem,
  HeaderMenuItemGrid,
  SidebarContainer,
  SidebarItem,
} from "./style";
import { useNavigate } from "react-router-dom";
import { useGeneral } from "../../../contexts/GeneralContext";

const Header = () => {
const { isOpenState, setIsOpen } = useGeneral();

  const openSideMenu = () => {
    setIsOpen(true);
  };

  const closeSideMenu = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();

  const redirect = (path: string) => {
    navigate(path);
  };

  return (
    <HeaderContainer>
      {/* Desktop version */}
      <HeaderGrid>
        <HeaderLogo>BabySym</HeaderLogo>
        <HeaderMenuItemGrid>
          <HeaderMenuItem onClick={() => redirect("/")}>Home</HeaderMenuItem>
          <HeaderMenuItem onClick={() => redirect("search")}>
            Search
          </HeaderMenuItem>
          <HeaderMenuItem onClick={() => redirect("custom-collections")}>
            Custom collections
          </HeaderMenuItem>
          <HeaderMenuItem onClick={() => redirect("votes")}>
            Votes
          </HeaderMenuItem>
        </HeaderMenuItemGrid>
        <HeaderButtonContainer>
          <HeaderButton>Connect Wallet</HeaderButton>
        </HeaderButtonContainer>
      </HeaderGrid>
      {/* Mobile version */}
      <HeaderGridMobile>
        <HeaderLogo>BabySym</HeaderLogo>
        <HeaderMenuButtonContainer>
          <i
            onClick={() => openSideMenu()}
            className="fa fa-bars"
            aria-hidden="true"
          ></i>
        </HeaderMenuButtonContainer>
      </HeaderGridMobile>
      {/* Mobile sidebar version */}
      <SidebarContainer isOpen={isOpenState}>
        <CloseSidebarItem onClick={() => closeSideMenu()}>X</CloseSidebarItem>
        <SidebarItem onClick={() => redirect("/")}>Home</SidebarItem>
        <SidebarItem onClick={() => redirect("search")}>Search</SidebarItem>
        <SidebarItem onClick={() => redirect("custom-collections")}>
          Custom Collections
        </SidebarItem>
        <SidebarItem onClick={() => redirect("votes")}>Votes</SidebarItem>
      </SidebarContainer>
    </HeaderContainer>
  );
};

export default Header;

