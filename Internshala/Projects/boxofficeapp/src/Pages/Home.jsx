import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const handleChange = (e) => [setInputValue(e.target.value)];
  const onSearch = async (e) => {
    e.preventDefault();
    await fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {}, []);
  return (
    <div>
      <form action="" onSubmit={onSearch}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Home;
