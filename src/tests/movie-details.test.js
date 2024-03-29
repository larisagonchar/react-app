import { render } from '@testing-library/react';
import MovieDetails from 'components/movie-details/movie-details';
import { movieDetailsMock } from '../__mocks__/movie-details';

test('MovieDetails component should render movie details', () => {
  const { asFragment } = render(<MovieDetails selectedMovie={movieDetailsMock} />);

  expect(asFragment).toMatchSnapshot();
});