import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter subject"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchButtonClick}>Search</button>
    </div>
  );
};

export default SearchBar;
