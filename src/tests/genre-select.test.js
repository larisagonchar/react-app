import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GenreSelect from '../components/genre-select/genre-select';

describe('GenreSelect component', () => {
  const genres = ['All', 'Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Family', 'Thriller'];
  const selectedGenre = 'Drama';

  test('render all genres', () => {
    const { asFragment } = render(<GenreSelect genres={genres} />);

    expect(asFragment).toMatchSnapshot();
  });

  test('highlight selected genre', () => {
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre} />);
    const selectedGenreItem = screen.getByText('Drama');

    expect(selectedGenreItem).toHaveClass('genre-select__item_selected');
  });

  test('call onSelect when user select item', () => {
    const onItemClickMock = jest.fn();
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onItemClickMock} />);

    const genre = screen.getByText('Action');
    userEvent.click(genre);

    expect(onItemClickMock).toHaveBeenCalledWith('Action');
  });
});