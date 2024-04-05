import React from 'react';
import './search.css';
import SearchForm from './elements/search-form/search-form';
import Header from '../header/header';
import { Outlet } from 'react-router-dom';

const Search = () => {
  return (
    <section className='search'>
      <Header isSearchButtonVisible={false} />
      <h3 className='search__title'>find your movie</h3>
      <SearchForm/>

      <Outlet/>
    </section>
  );
};

export default Search;