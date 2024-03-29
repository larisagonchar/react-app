import React, { useEffect, useState } from 'react';
import './movie-list-page.css';
import Search from '../search/search';
import { GENRE_ALL } from 'src/constants/genre.constants';
import MovieTile from '../movie-tile/movie-tile';
import { SORT_CONTROLS } from 'src/constants/sort-control.constants';
import MovieDetails from '../movie-details/movie-details';
import MovieService from 'src/services/movie.service';
import PageControls from './elements/page-controls';

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
      sortOrder: 'asc',
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

  const search = <Search onSearch={setSearchQuery} searchQuery={searchQuery} />;
  const movieDetails = <MovieDetails selectedMovie={movie} onSearch={() => { setMovie(null) }} />;

  return (
    <>
      {movie ? movieDetails : search}

      <main>
        <PageControls selectedGenres={genres} onSelectGenres={setGenres} 
          selectedControl={sortControl} onSelectSortControl={setSortControl}/>

        <div className='movie-list-page__content'>
          {movieList}
        </div>
      </main>
    </>
  );
};

export default MovieListPage;