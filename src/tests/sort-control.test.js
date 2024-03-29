import { render } from '@testing-library/react';
import SortControl from '../components/sort-control/sort-control';

describe('SortControl component', () => {  
  test('should render sort control', () => {
    const { asFragment } = render(<SortControl selectedControl={'Title'} />);

    expect(asFragment).toMatchSnapshot();
  });
});