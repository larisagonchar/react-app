import React, { useEffect, useState } from 'react';
import './movie-list-page.css';
import Search from '../search/search';
import SortControl from '../sort-control/sort-control';
import GenreSelect from '../genre-select/genre-select';
import { GENRES_LIST, GENRE_ALL } from 'src/constants/genre.constants';
import MovieTile from '../movie-tile/movie-tile';
import { SORT_CONTROLS } from 'src/constants/sort-control.constants';
import MovieDetails from '../movie-details/movie-details';
import MovieService from 'src/services/movie.service';

const MovieListPage = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [sortControl, setSortControl] = useState(SORT_CONTROLS[0]);
  const [genres, setGenres] = useState([GENRE_ALL]);
  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  const [controller, setController] = useState(null);

  useEffect(() => {
    const params = {
      search: searchQuery,
      searchBy: 'title',
      sortBy: sortControl.id,
      filter: genres.includes(GENRE_ALL) ? null : genres.join(',')
    };

    setMoviesList(params);
  }, [genres, searchQuery, sortControl]);

  const setMoviesList = async (params) => {
    if (controller) {
      controller.abort();
      setController(null);
    }

    const newController = new AbortController();
    setController(newController);

    const result = await MovieService.getMovies(params, newController.signal);
    setMovies(result);
  };

  const movieList = movies.map(movie =>
    <MovieTile movie={movie} key={movie.id} onClick={setMovie} />
  );

  return (
    <>
      {!movie && <Search onSearch={setSearchQuery} searchQuery={searchQuery} />}
      {movie && <MovieDetails selectedMovie={movie} onSearch={() => { setMovie(null) }} />}

      <main>
        <div className='movie-list-page__controls'>
          <GenreSelect genres={GENRES_LIST} selectedGenres={genres} onSelect={setGenres} />
          <SortControl selectedControl={sortControl} onSelect={setSortControl} />
        </div>

        <div className='movie-list-page__content'>
          {movieList}
        </div>
      </main>
    </>
  );
};

export default MovieListPage;