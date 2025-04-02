// import React, { useState } from "react";

// const SearchFilter = ({ onSearch }) => {
//   const [query, setQuery] = useState("");

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <div className="search-bar flex justify-center mb-4">
//       <input
//         type="text"
//         value={query}
//         onChange={handleInputChange}
//         placeholder="Search profiles..."
//         className="p-2 border rounded w-1/2"
//       />
//     </div>
//   );
// };

// export default SearchFilter;

import React, { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("name");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value, filterType);
  };

  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
    onSearch(query, e.target.value);
  };

  return (
    <div className="search-bar flex flex-col md:flex-row justify-center mb-4 gap-4">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder={`Search by ${filterType}...`}
        className="p-2 border rounded w-full md:w-1/2"
      />
      <select 
        value={filterType}
        onChange={handleFilterChange}
        className="search-filter p-2 border rounded"
      >
        <option value="name">Name</option>
        <option value="interests">Interests</option>
      </select>
    </div>
  );
};

export default SearchFilter;

