import React from 'react';
import './movie-details.css';
import { formatTime } from 'src/formatters/time.formatter';
import MovieGenre from './elements/movie-genre/movie-genre';
import MovieImage from './elements/movie-image/movie-image';
import Title from '../title/title';
import Header from '../header/header';

const MovieDetails = ({ selectedMovie, onSearch }) => {
  return (
    <section className='movie-details'>
      <Header isSearchButtonVisible={true} onSearch={onSearch}/>

      <div className='movie-details__main'>
        <MovieImage image={selectedMovie.poster_path}/>

        <div className='movie-details__content'>
          <div className='movie-details__container'>
            <Title title={selectedMovie.title}/>
            <span className='movie-details__rating'>{selectedMovie.vote_average}</span>
          </div>

          <MovieGenre genres={selectedMovie.genres}/>

          <div className='movie-details__container'>
            <span className='movie-details__year'>{new Date(selectedMovie.release_date).getFullYear()}</span>
            <span className='movie-details__time'>{formatTime(selectedMovie.runtime)}</span>
          </div>

          <span className='movie-details__description'>{selectedMovie.overview}</span>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;