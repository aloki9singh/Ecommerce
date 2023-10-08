import React, { useState } from "react";
import { useSearchStr } from "../lib/useSearchStr";
import { CustomRadio } from "./CustomRadio";
import styled from "styled-components";
const Searchform = ({ onSearch }) => {
  const [inputValue, setInputValue] = useSearchStr("");
  const [searchOption, setSearchOption] = useState("shows");

  const handleChange = (e) => setInputValue(e.target.value);
  const onRadiochange = (e) => {
    setSearchOption(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue, searchOption);
  };
  return (
    <form action="" onSubmit={onSubmit}>
      <SearchInput type="text" onChange={handleChange} value={inputValue} placeholder={"Search for something"} />

      <RadiosWrapper>
        <CustomRadio
          label={"Shows"}
          checked={searchOption == "shows"}
          name="search-option"
          value={"shows"}
          onChange={onRadiochange}
        />
        <CustomRadio
          label={"Actors"}
          checked={searchOption == "actors"}
          name="search-option"
          value={"actors"}
          onChange={onRadiochange}
        />
      </RadiosWrapper>

    <SearchButtonWrapper ><button type="submit">Search</button></SearchButtonWrapper>
      
    </form>
  );
};

export default Searchform;

const SearchInput = styled.input`
  display: block;
  font-family: "Roboto", sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
