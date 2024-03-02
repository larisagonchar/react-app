import { render, screen } from '@testing-library/react';
import SortControl from '../components/sort-control/sort-control';
import userEvent from '@testing-library/user-event';
import { SORT_CONTROLS } from '../constants/sort-control.constants';

describe('SortControl component', () => {  
  test('should render sort control', () => {
    const { asFragment } = render(<SortControl selectedControl={'Title'} />);

    expect(asFragment).toMatchSnapshot();
  });

  test('should call onSelect when user click on item', () => {
    // arrange
    const onItemClickMock = jest.fn();
    render(<SortControl selectedControl={SORT_CONTROLS[0].value} onSelect={onItemClickMock}/>);
    const select = screen.getByTestId('select');

    // act
    userEvent.selectOptions(select, SORT_CONTROLS[1].value);

    // assert
    expect(onItemClickMock).toHaveBeenCalledWith(SORT_CONTROLS[1].value);
  });
});