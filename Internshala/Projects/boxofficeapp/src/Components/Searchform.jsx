import React, { useState } from "react";
import { useSearchStr } from "../lib/useSearchStr";

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
      <input type="text" onChange={handleChange} value={inputValue} />
      <label>
        Shows
        <input
          checked={searchOption == "shows"}
          type="radio"
          name="search-option"
          value={"shows"}
          onChange={onRadiochange}
        />
      </label>
      <label>
        Actors
        <input
          checked={searchOption == "actors"}
          type="radio"
          name="search-option"
          value={"actors"}
          onChange={onRadiochange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default Searchform;
