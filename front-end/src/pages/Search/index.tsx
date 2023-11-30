import React, { useState } from "react";
import { ButtonSearch, SearchContainer, SearchInput, SearchInputContainer } from "./style";
import { useApi } from "../../contexts/apiContext";
import { useNavigate } from "react-router-dom";

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate()
  return (
    <SearchContainer>
      <SearchInputContainer>
        <i
          style={{ color: "white" }}
          className="fa fa-search"
          aria-hidden="true"
        ></i>
        <SearchInput onChange={(e) => setSearch(e.target.value)} placeholder="Enter the collection contract address" />
      </SearchInputContainer>
      <ButtonSearch onClick={() => navigate(`/collection/${search}`)}>Search</ButtonSearch>
    </SearchContainer>
  );
};

export default Search;
