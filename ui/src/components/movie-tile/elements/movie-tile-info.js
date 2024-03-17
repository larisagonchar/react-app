import React from 'react';
import './movie-tile-info.css';

const MovieTileInfo = ({ title, releaseDate }) => {
  return (
    <div className='movie-tile__info-container'>
      <span className='movie-tile__info-title'>{title}</span>
      <span className='movie-tile__info-year'>{new Date(releaseDate).getFullYear()}</span>
    </div>
  );
};

export default MovieTileInfo;