import React from "react";
import { ButtonSearch, SearchContainer, SearchInput, SearchInputContainer } from "./style";

const Search: React.FC = () => {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <i
          style={{ color: "white" }}
          className="fa fa-search"
          aria-hidden="true"
        ></i>
        <SearchInput placeholder="Enter the contract address of the chosen collection" />
      </SearchInputContainer>
      <ButtonSearch>Search</ButtonSearch>
    </SearchContainer>
  );
};

export default Search;