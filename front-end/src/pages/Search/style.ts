import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 10px 28px;
  border-radius: 12px;
  background-color: rgba(238, 237, 237, 0.15);
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: white;
  font-size: 18px;
  width: 100%;
  min-width: 500px;
  &::placeholder {
    color: #9f8fc1;
    opacity: 0.7;
    font-weight: 200;
  }
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