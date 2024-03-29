import React from 'react';
import './movie-genre.css';

const MovieGenre = ({ genres }) => {
  return (<span className='movie-details__genre'>{genres.join(', ')}</span>);
};

export default MovieGenre;