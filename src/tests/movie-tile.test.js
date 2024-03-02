import { render, screen } from '@testing-library/react';
import MovieTile from '../components/movie-tile/movie-tile';
import userEvent from '@testing-library/user-event';

describe('MovieTile component', () => {
  const movie = {
    genres: ['Action', 'Adventure'],
    release_date: 2004,
    title: 'Pulp Fiction',
    poster_path: ''
  };

  test('render movie tile', () => {
    const { asFragment } = render(<MovieTile movie={movie} />);

    expect(asFragment).toMatchSnapshot();
  });

  test('call onClick when user click on item', () => {
    const onItemClickMock = jest.fn();
    render(<MovieTile movie={movie} onClick={onItemClickMock} />);

    const container = screen.getByTestId('movie-tile');

    userEvent.click(container);

    expect(onItemClickMock).toHaveBeenCalledWith(movie);
  });
});