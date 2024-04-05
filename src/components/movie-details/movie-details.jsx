import React from 'react';
import './movie-details.css';
import MovieGenre from './elements/movie-genre/movie-genre';
import MovieImage from './elements/movie-image/movie-image';
import Title from '../title/title';
import Header from '../header/header';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { mapMovieFromServiceToUIMovie } from 'src/mappers/movie-form.mapper';

const MovieDetails = () => {
  const selectedMovie = useLoaderData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const movie = mapMovieFromServiceToUIMovie(selectedMovie);

  const handleSearchClick = () => {
    navigate(`/?${searchParams}`);
  };

  return (
    <section className='movie-details'>
      <Header isSearchButtonVisible={true} onSearch={handleSearchClick}/>

      <div className='movie-details__main'>
        <MovieImage image={movie.poster_path}/>

        <div className='movie-details__content'>
          <div className='movie-details__container'>
            <Title title={movie.title}/>
            <span className='movie-details__rating'>{movie.vote_average}</span>
          </div>

          <MovieGenre genres={movie.genres}/>

          <div className='movie-details__container'>
            <span className='movie-details__year'>{movie.release_date}</span>
            <span className='movie-details__time'>{movie.runtime}</span>
          </div>

          <span className='movie-details__description'>{movie.overview}</span>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;