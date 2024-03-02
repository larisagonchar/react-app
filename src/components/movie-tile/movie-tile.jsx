import React, { useState } from 'react';
import './movie-tile.css';
import defaultImg from '../../../assets/no-image.png';
import ContextMenu from '../context-menu/context-menu';

const MovieTile = ({ movie, onClick }) => {
  const genreList = movie.genres.join(', ');

  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(movie.poster_path);

  const handleContextMenuClick = (e) => {
    setIsContextMenuOpen(!isContextMenuOpen);
    e.stopPropagation();
  };

  return (
    <div data-testid="movie-tile" className='movie-tile' onClick={onClick}>
      <img src={imageSrc} alt='not-found-poster' onError={() => setImageSrc(defaultImg)}/>

      <div className="movie-tile__context-menu" onClick={handleContextMenuClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {isContextMenuOpen && <ContextMenu onClick={handleContextMenuClick}/>}

      <div className='movie-tile__info-container'>
        <span className='movie-tile__info-title'>{movie.title}</span>
        <span className='movie-tile__info-year'>{new Date(movie.release_date).getFullYear()}</span>
      </div>

      <span className='movie-tile__info-list'>{genreList}</span>
    </div>
  );
}

export default MovieTile;