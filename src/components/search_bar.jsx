import React from 'react';

const SearchBar = ({ search }) => {
  return (
    <input type="text" className="form-control form-search" onChange={e => search(e.target.value)} />
  );
};

export default SearchBar;
