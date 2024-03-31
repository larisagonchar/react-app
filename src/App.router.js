import { createBrowserRouter } from 'react-router-dom';
import MovieListPage from './components/movie-list-page/movie-list-page';
import MovieDetails from './components/movie-details/movie-details';
import Search from './components/search/search';
import MovieLoader from './loaders/movie.loader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    children: [
      {
        path: '/:movieId',
        element: <MovieDetails />,
        loader: MovieLoader.movieDetailsLoader
      },
      {
        path: '/',
        element: <Search />
      }
    ],
  },
]);