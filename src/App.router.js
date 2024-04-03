import { createBrowserRouter } from 'react-router-dom';
import MovieListPage from './components/movie-list-page/movie-list-page';
import MovieDetails from './components/movie-details/movie-details';
import Search from './components/search/search';
import MovieLoader from './loaders/movie.loader';
import AddMovie from './components/modals/add-movie/add-movie';
import EditMovie from './components/modals/edit-movie/edit-movie';

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
        element: <Search />,
        children: [
          {
            path: 'new',
            element: <AddMovie/>
          },
          {
            path: '/:movieId/edit',
            element: <EditMovie/>,
            loader: MovieLoader.movieDetailsLoader
          }
        ]
      }
    ],
  },
]);