import React from 'react';
import searchImg from 'src/assets/search-button.png';
import './movie-header.css';

const MovieHeader = () => {
  return (
    <header className='movie-details__header'>
      <span>netflixroulette</span>
      <img className='movie-details__header-img' src={searchImg} alt='search' />
    </header>
  )
}

export default MovieHeader;