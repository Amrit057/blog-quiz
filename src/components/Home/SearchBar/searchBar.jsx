import React from 'react';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
    <form onSubmit={formSubmit} className=' bg-[#E3E3E3] rounded p-2 mb-8'>
        <input
            className='outline-0 bg-[#E3E3E3] rounded mr-2'
            type='text'
            placeholder='Search By Category'
            value={value}
            onChange={handleSearchKey}

        />
        {value && <span className='mr-2 cursor-pointer' onClick={clearSearch}>X</span>}
        <button className='bg-[#00B074] rounded p-2'>Go</button>
    </form>
);

export default SearchBar;