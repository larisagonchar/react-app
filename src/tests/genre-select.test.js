import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GenreSelect from '../components/genre-select/genre-select';
import { GENRES_LIST } from '../constants/genre.constants';

describe('GenreSelect component', () => {
  const selectedGenre = 'Drama';
  const onItemClickMock = jest.fn();

  test('should render all genres', () => {
    const { asFragment } = render(<GenreSelect genres={GENRES_LIST} />);

    expect(asFragment).toMatchSnapshot();
  });

  test('should highlight selected genre', () => {
    render(<GenreSelect genres={GENRES_LIST} selectedGenre={selectedGenre} />);
    const selectedGenreItem = screen.getByText('Drama');

    expect(selectedGenreItem).toHaveClass('genre-select__item_selected');
  });

  test('should call onSelect when user select item', () => {
    // arrange
    render(<GenreSelect genres={GENRES_LIST} selectedGenre={selectedGenre} onSelect={onItemClickMock} />);
    const genre = screen.getByText('Action');

    // act
    userEvent.click(genre);

    // assert
    expect(onItemClickMock).toHaveBeenCalledWith('Action');
  });
});