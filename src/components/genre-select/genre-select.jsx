import React from 'react';
import './genre-select.css';
import classNames from 'classnames';
import { getSelectedGenresHelper } from 'src/helpers/genre-select.helper';
import Button from '../controls/button/button';

const GenreSelect = ({ genres, selectedGenres, onSelect }) => {
  const handleSelectGenre = (event) => {
    const selectedGenre = event.target.textContent;
    onSelect(getSelectedGenresHelper(selectedGenre, selectedGenres));
  };

  const genreList = genres.map(item => {
    const selectedGenre = selectedGenres.find(genre => genre === item.value);
    const buttonClass = classNames('genre-select__button', { 'genre-select__button_selected': !!selectedGenre });

    return <li key={item.id}>
      <Button aria-pressed={selectedGenres.includes(item.value)} type='button' 
        className={buttonClass} title={item.value} onClick={handleSelectGenre} />
    </li>;
  });

  return (
    <ul className='genre-select' data-testid='genre-select'>
      {genreList}
    </ul>
  )
}

export default GenreSelect;