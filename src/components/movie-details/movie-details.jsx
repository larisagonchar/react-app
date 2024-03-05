import React from 'react';
import './movie-details.css';
import { formatTime } from '../../formatters/time.formatter';
import MovieHeader from './elements/movie-header/movie-header';
import MovieGenre from './elements/movie-genre/movie-genre';
import MovieImage from './elements/movie-image/movie-image';
import Title from '../title/title';

const MovieDetails = ({ selectedMovie }) => {

  return (
    <section className='movie-details'>
      <MovieHeader/>

      <div className='movie-details__main'>
        <MovieImage image={selectedMovie.poster_path}/>

        <div className='movie-details__content'>
          <div className='movie-details__container'>
            <Title title={selectedMovie.title}/>
            <span className='movie-details__rating'>{selectedMovie.vote_average}</span>
          </div>

          <MovieGenre genres={selectedMovie.genres}/>

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