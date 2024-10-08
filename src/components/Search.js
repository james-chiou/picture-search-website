import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input className="input" onChange={inputHandler} type="text" />
      <button onClick={search} class="btn btn-success text-dark">
        Search
      </button>
    </div>
  );
};

export default Search;
