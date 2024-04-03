import React, { useState } from 'react';
import './movie-tile.css';
import ContextMenu from 'src/components/context-menu/context-menu';
import MovieGenre from 'src/components/movie-details/elements/movie-genre/movie-genre';
import MovieImage from 'src/components/movie-details/elements/movie-image/movie-image';
import MovieTileInfo from './elements/movie-tile-info';
import { useNavigate } from 'react-router-dom';

const MovieTile = ({ movie, onClick }) => {
  const navigate = useNavigate();

  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const handleContextMenuClick = (e) => {
    setIsContextMenuOpen(!isContextMenuOpen);
    e.stopPropagation();
  };

  const handleMovieTileClick = () => {
    onClick(movie.id);
  }

  const handleEditMovieClick = (e) => {
    navigate(`${movie.id}/edit`);
    setIsContextMenuOpen(!isContextMenuOpen);
    e.stopPropagation();
  }

  return (
    <div data-testid='movie-tile' className='movie-tile' onClick={handleMovieTileClick}>
      <MovieImage image={movie.poster_path} />

      <div className='movie-tile__context-menu' onClick={handleContextMenuClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {isContextMenuOpen && <ContextMenu onContextMenuClick={handleContextMenuClick} onEditClick={handleEditMovieClick} />}

      <div className='movie-tile__info'>
        <MovieTileInfo title={movie.title} releaseDate={movie.release_date} />
        <MovieGenre genres={movie.genres} />
      </div>
    </div>
  );
}

export default MovieTile;