import React from 'react';
import './search-form.css';

const SearchForm = ({ searchQuery, onSearch }) => {
  let search = searchQuery;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(search);
    }
  }

  const handleInputChange = (e) => {
    search = e.target.value;
  }

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <>
      <div className='search-form'>
        <input onKeyDown={handleKeyDown} onChange={handleInputChange} className='search-form__input'
          type='text' placeholder='What do you want to watch?' defaultValue={search}></input>
        <button type='button' className='search-form__button' onClick={handleSearch}>search</button>
      </div>
    </>
  )
}

export default SearchForm;