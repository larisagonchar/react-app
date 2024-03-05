import React, { useState } from 'react';
import './genre-select.css';
import classNames from 'classnames';

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  const [genre, setGenre] = useState(selectedGenre);

  const handleSelect = (e) => {
    const value = e.target.textContent;
    setGenre(value);
    onSelect(value);
  }

  const genreList = genres.map(item => {
    const spanClass = classNames('genre-select__item', { 'genre-select__item_selected': item.item === genre });
    return <li key={item.id} className={spanClass} onClick={handleSelect}>{item.item}</li>;
  });

  return (
    <ul className='genre-select' data-testid='genre-select'>
      {genreList}
    </ul>
  )
}

export default GenreSelect;