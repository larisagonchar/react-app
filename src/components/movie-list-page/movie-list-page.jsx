import React, { useCallback, useEffect, useState } from 'react';
import './movie-list-page.css';
import { GENRE_ALL } from 'src/constants/genre.constants';
import MovieTile from '../movie-tile/movie-tile';
import MovieService from 'src/services/movie.service';
import PageControls from './elements/page-controls';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSearchParams } from 'src/hooks/app-search-params';

const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
  const [state, searchParams, setGenres, setSearchQuery, setSortControl, setController] = useAppSearchParams();
  const navigate = useNavigate();

  const handleMovieTileClick = (id) => {
    navigate(`${id}?${searchParams}`);
  };

  const setMoviesList = useCallback(async (params) => {
    const newController = new AbortController();
    setController(newController);

    const result = await MovieService.getMovies(params, newController.signal);
    setMovies(result);
  }, [setController]);

  useEffect(() => {
    const requestParams = {
      search: state.searchQuery,
      sortBy: state.sortControl,
      filter: state.genres.includes(GENRE_ALL) ? null : state.genres
    };

    setMoviesList(requestParams);
  }, [state, setMoviesList]);

  const movieList = movies.map(movie =>
    <MovieTile movie={movie} key={movie.id} onClick={handleMovieTileClick} />
  );

  return (
    <>
      <Outlet context={[state.searchQuery, setSearchQuery]} />

      <main>
        <PageControls selectedGenres={state.genres} onSelectGenres={setGenres}
          selectedControlId={state.sortControl} onSelectSortControl={setSortControl} />

        <div className='movie-list-page__content'>
          {movieList}
        </div>
      </main>
    </>
  );
};

export default MovieListPage;