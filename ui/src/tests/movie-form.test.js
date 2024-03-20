import { render } from '@testing-library/react';
import { movieTileMock } from '../__mocks__/movie-tile';
import MovieForm from 'src/components/movie-form/movie-form';

test('MovieForm component should render movie form', () => {
  const { asFragment } = render(<MovieForm movie={movieTileMock} />);

  expect(asFragment).toMatchSnapshot();
});