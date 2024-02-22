import React from 'react';
import './genre-select.css';

const GenreSelect = ({ genres, selectedGenre, onSelect }) => {
  const handleSelect = (e) => {
    const value = e.target.textContent;
    onSelect(value);
  }

  const genreList = genres.map(item => {
    const spanClass = `genre-select__item ${item === selectedGenre ? 'genre-select__item_selected' : ''}`;
    return <span key={item} className={spanClass} onClick={handleSelect}>{item}</span>;
  });

  return (
    <div className='genre-select'>
      {genreList}
    </div>
  )
}

export default GenreSelect;