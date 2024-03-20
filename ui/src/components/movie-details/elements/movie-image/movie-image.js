import React, { useState } from 'react';
import './movie-image.css';
import defaultImg from 'src/assets/no-image.png';

const MovieImage = ({ image }) => {
  const [imageSrc, setImageSrc] = useState(image);
  
  return (
    <img className='movie-details__image' onError={() => setImageSrc(defaultImg)} src={imageSrc} alt='poster' />
  )
};

export default MovieImage;