import { render, screen } from '@testing-library/react';
import SortControl from '../components/sort-control/sort-control';
import userEvent from '@testing-library/user-event';

describe('SortControl component', () => {  
  test('render sort control', () => {
    const { asFragment } = render(<SortControl selectedControl={'Title'} />);

    expect(asFragment).toMatchSnapshot();
  });

  test('call onSelect when user click on item', () => {
    const onItemClickMock = jest.fn();
    const option = 'Release Date';
    render(<SortControl selectedControl={'Title'} onSelect={onItemClickMock}/>);

    const select = screen.getByTestId('select');

    userEvent.selectOptions(select, option);

    expect(onItemClickMock).toHaveBeenCalledWith(option);
  });
});