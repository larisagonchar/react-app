import React from 'react';
import './genre-select.css';
import classNames from 'classnames';

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  const handleSelect = (e) => {
    const value = e.target.textContent;
    onSelect(value);
  }

  const genreList = genres.map(item => {
    const spanClass = classNames('genre-select__item', { 'genre-select__item_selected': item.item === selectedGenre });
    return <span key={item.id} className={spanClass} onClick={handleSelect}>{item.item}</span>;
  });

  return (
    <div className='genre-select' data-testid='genre-select'>
      {genreList}
    </div>
  )
}

export default GenreSelect;