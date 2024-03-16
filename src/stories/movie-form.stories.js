import MovieForm from 'src/components/movie-form/movie-form';
import { movieDetailsMock } from 'src/__mocks__/movie-details';

export default {
  title: 'MovieForm',
  component: MovieForm
};

export const Default = {
  args: {
    movie: movieDetailsMock,
    onSubmit: () => {}
  }
};