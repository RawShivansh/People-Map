import React, { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar flex justify-center mb-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search profiles..."
        className="p-2 border rounded w-1/2"
      />
    </div>
  );
};

export default SearchFilter;

