import { render, screen } from '@testing-library/react';
import MovieTile from '../components/movie-tile/movie-tile';
import userEvent from '@testing-library/user-event';
import { movieTileMock } from '../__mocks__/movie-tile';

describe('MovieTile component', () => {
  test('should render movie tile', () => {
    const { asFragment } = render(<MovieTile movie={movieTileMock} />);

    expect(asFragment).toMatchSnapshot();
  });

  test('call onClick when user click on item', () => {
    // arrange
    const onItemClickMock = jest.fn();
    render(<MovieTile movie={movieTileMock} onClick={onItemClickMock} />);
    const container = screen.getByTestId('movie-tile');
    
    // act
    userEvent.click(container);
    
    // assert
    expect(onItemClickMock).toHaveBeenCalledWith(movieTileMock);
  });
});