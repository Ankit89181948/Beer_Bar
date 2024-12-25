import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex  mb-4 mt-3  align-baseline">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name..."
        className="w-15 px-2 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-900"
      />
    </div>
  );
};

export default SearchBar;
