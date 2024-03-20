import React from 'react';
import './genre-select.css';
import classNames from 'classnames';
import { getSelectedGenresHelper } from 'src/helpers/genre-select.helper';

const GenreSelect = ({ genres, selectedGenres, onSelect }) => {
  const handleSelectGenre = (event) => {
    const selectedGenre = event.target.textContent;
    onSelect(getSelectedGenresHelper(selectedGenre, [...selectedGenres]));
  };

  const genreList = genres.map(item => {
    const selectedGenre = selectedGenres.find(genre => genre === item.value);
    const spanClass = classNames('genre-select__item', { 'genre-select__item_selected': !!selectedGenre });

    return <li key={item.id} className={spanClass} onClick={handleSelectGenre}>{item.value}</li>;
  });

  return (
    <ul className='genre-select' data-testid='genre-select'>
      {genreList}
    </ul>
  )
}

export default GenreSelect;