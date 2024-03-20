import { movieDetailsMock } from '../__mocks__/movie-details';
import MovieDetails from 'src/components/movie-details/movie-details';

export default {
  title: 'MovieDetails',
  component: MovieDetails
};

export const Default = {
  args: {
    selectedMovie: movieDetailsMock
  }
};