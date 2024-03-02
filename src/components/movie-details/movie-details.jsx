import React, { useState } from 'react';
import './movie-details.css';
import searchImg from '../../../assets/search-button.png';
import defaultImg from '../../../assets/no-image.png';
import { formatTime } from '../../formatters/time.formatter';

const MovieDetails = ({ selectedMovie }) => {
  const [imageSrc, setImageSrc] = useState(selectedMovie.poster_path);

  return (
    <section className='movie-details'>
      <div className='movie-details__header'>
        <span>netflixroulette</span>
        <img className='movie-details__header-img' src={searchImg} alt='search' />
      </div>

      <div className='movie-details__main'>
        <img className='movie-details__image' onError={() => setImageSrc(defaultImg)} src={imageSrc} alt='poster' />

        <div className='movie-details__content'>
          <div className='movie-details__container'>
            <span className='movie-details__title'>{selectedMovie.title}</span>
            <span className='movie-details__rating'>{selectedMovie.vote_average}</span>
          </div>

          <span className='movie-details__genre'>{selectedMovie.genres.join(', ')}</span>

          <div className='movie-details__container'>
            <span className='movie-details__year'>{selectedMovie.release_date}</span>
            <span className='movie-details__time'>{formatTime(selectedMovie.runtime)}</span>
          </div>

          <span className='movie-details__description'>{selectedMovie.overview}</span>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;