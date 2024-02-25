import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GenreSelect from '../components/genre-select/genre-select';
import { GENRES_LIST } from '../constants/genre.constants';

describe('GenreSelect component', () => {
  const selectedGenre = 'Drama';

  test('render all genres', () => {
    const { asFragment } = render(<GenreSelect genres={GENRES_LIST} />);

    expect(asFragment).toMatchSnapshot();
  });

  test('highlight selected genre', () => {
    render(<GenreSelect genres={GENRES_LIST} selectedGenre={selectedGenre} />);
    const selectedGenreItem = screen.getByText('Drama');

    expect(selectedGenreItem).toHaveClass('genre-select__item_selected');
  });

  test('call onSelect when user select item', () => {
    const onItemClickMock = jest.fn();
    render(<GenreSelect genres={GENRES_LIST} selectedGenre={selectedGenre} onSelect={onItemClickMock} />);

    const genre = screen.getByText('Action');
    userEvent.click(genre);

    expect(onItemClickMock).toHaveBeenCalledWith('Action');
  });
});