import { render } from '@testing-library/react';
import MovieDetails from '../components/movie-details/movie-details';
import { movieDetailsMock } from '../__mocks__/movie-details';

describe('MovieDetails component', () => {
  test('should render movie details', () => {
    const { asFragment } = render(<MovieDetails selectedMovie={movieDetailsMock} />);

    expect(asFragment).toMatchSnapshot();
  });
});