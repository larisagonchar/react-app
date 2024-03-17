import { render, screen } from '@testing-library/react';
import SearchForm from '../components/search-form/search-form';
import userEvent from '@testing-library/user-event';

describe('SearchForm component', () => {
  const onItemSearchMock = jest.fn();

  test('should render correctly initial value', () => {
    render(<SearchForm searchQuery='Search' onSearch={onItemSearchMock} />);
    const textElement = screen.getByLabelText('search');

    expect(textElement).toHaveValue('Search');
  });

  test('should call onSearch with search input after clicking on submit button', () => {
    // arrange
    render(<SearchForm searchQuery='' onSearch={onItemSearchMock} />);
    const textElement = screen.getByLabelText('search');
    const button = screen.getByRole('button');

    // act
    userEvent.type(textElement, 'movie');
    userEvent.click(button);
    
    // assert
    expect(onItemSearchMock).toHaveBeenCalledWith('movie');
  });

  test('should call onSearch with search input after clicking on Enter button', () => {
    // arrange
    render(<SearchForm searchQuery='' onSearch={onItemSearchMock} />);
    const textElement = screen.getByLabelText('search');

    // act
    userEvent.type(textElement, 'movie');
    userEvent.type(textElement, '{Enter}');

    // assert
    expect(onItemSearchMock).toHaveBeenCalledWith('movie');
  });
});