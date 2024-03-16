import React from 'react';
import './search-form.css';
import Button from '../controls/button/button';

const SearchForm = ({ searchQuery, onSearch }) => {
  let search = searchQuery;

  const handleInputChange = (e) => {
    search = e.target.value;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form className='search-form' onSubmit={handleSearch}>
      <input name='search' aria-label='search' onChange={handleInputChange}
        className='search-form__input' type='text' placeholder='What do you want to watch?'
        defaultValue={search}></input>
      <Button type='submit' title='submit'/>
    </form>
  );
}

export default SearchForm;