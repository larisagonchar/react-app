import React from 'react';
import searchImg from 'src/assets/search-button.png';
import './header.css';
import Button from '../controls/button/button';

const Header = ({ isSearch, onSearch }) => {
  return (
    <header className='header'>
      <span>netflixroulette</span>
      { isSearch && <img className='header__img' src={searchImg} alt='search' onClick={onSearch}/> }

      { !isSearch && <Button type='button' title='+ Add movie' className='header__button'/> }
    </header>
  )
}

export default Header;