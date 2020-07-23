import React from 'react';

const Search = ({searchChange, searchField}) => {
    return (
    <div className="bg-lightest-green">
    <input 
        type='search' 
        placeholder='Search Candidates'
        onChange = {searchChange} />
    </div>
    )
}

export default Search;