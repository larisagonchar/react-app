import React from 'react';
import './movie-image.css';

const MovieImage = ({ image }) => {
  return (
    <img className='movie-details__image' src={image} alt='poster' />
  )
};

export default MovieImage;