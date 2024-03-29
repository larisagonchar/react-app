import React from 'react';
import './search.css';
import SearchForm from './elements/search-form/search-form';
import Header from '../header/header';

const Search = ({ onSearch, searchQuery }) => {
  return (
    <section className='search'>
      <Header isSearchButtonVisible={false} />
      <h3 className='search__title'>find your movie</h3>
      <SearchForm searchQuery={searchQuery} onSearch={onSearch}/>
    </section>
  );
};

export default Search;