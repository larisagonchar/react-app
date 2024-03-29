import React from 'react';
import searchImg from 'src/assets/search-button.png';
import './header.css';
import Button from '../controls/button/button';

const Header = ({ isSearchButtonVisible, onSearch }) => {
  const img = <img className='header__img' src={searchImg} alt='search' onClick={onSearch} />;
  const button = <Button type='button' title='+ Add movie' className='header__button' />;
 
  return (
    <header className='header'>
      <span>netflixroulette</span>
      {isSearchButtonVisible ? img : button}
    </header>
  )
}

export default Header;