import { render, screen } from '@testing-library/react';
import SearchForm from '../components/search-form/search-form';
import userEvent from '@testing-library/user-event';

describe('SearchForm component', () => {
  const onItemSearchMock = jest.fn();
  
  test('renders correctly initial value', () => {
    render(<SearchForm searchQuery='Search' onSearch={onItemSearchMock} />);
    const textElement = screen.getByLabelText('search');

    expect(textElement).toHaveValue('Search');
  });

  test('call onSearch with search input after clicking on submit button', () => {
    render(<SearchForm searchQuery='' onSearch={onItemSearchMock} />);
    const textElement = screen.getByLabelText('search');
    userEvent.type(textElement, 'movie');

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(onItemSearchMock).toHaveBeenCalledWith('movie');
  });

  test('call onSearch with search input after clicking on Enter button', () => {
    render(<SearchForm searchQuery='' onSearch={onItemSearchMock} />);
    const textElement = screen.getByLabelText('search');

    userEvent.type(textElement, 'movie');
    userEvent.type(textElement, '{Enter}');

    expect(onItemSearchMock).toHaveBeenCalledWith('movie');
  });
});