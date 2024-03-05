import React, { useState } from 'react';
import './movie-tile.css';
import ContextMenu from '../context-menu/context-menu';
import MovieGenre from '../movie-details/elements/movie-genre/movie-genre';
import MovieImage from '../movie-details/elements/movie-image/movie-image';
import MovieTileInfo from './elements/movie-tile-info';

const MovieTile = ({ movie, onClick }) => {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const handleContextMenuClick = (e) => {
    setIsContextMenuOpen(!isContextMenuOpen);
    e.stopPropagation();
  };

  const handleMovieTileClick = () => {
    onClick(movie);
  }

  return (
    <div data-testid='movie-tile' className='movie-tile' onClick={handleMovieTileClick}>
      <MovieImage image={movie.poster_path} />

      <div className='movie-tile__context-menu' onClick={handleContextMenuClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {isContextMenuOpen && <ContextMenu onClick={handleContextMenuClick} />}

      <MovieTileInfo title={movie.title} releaseDate={movie.release_date} />
      
      <MovieGenre genres={movie.genres} />
    </div>
  );
}

export default MovieTile;