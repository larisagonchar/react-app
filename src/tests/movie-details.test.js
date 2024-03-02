import { render } from '@testing-library/react';
import MovieDetails from '../components/movie-details/movie-details';

describe('MovieDetails component', () => {
  const movie = {
    genres: ['Action', 'Adventure'],
    release_date: 2004,
    title: 'Pulp Fiction',
    vote_average: 9.8,
    overview: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    runtime: 130,
    poster_path: ''
  };

  test('should render movie details', () => {
    const { asFragment } = render(<MovieDetails selectedMovie={movie} />);

    expect(asFragment).toMatchSnapshot();
  });
});