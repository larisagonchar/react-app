/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-wait-for-side-effects */
import { render, screen, waitFor } from '@testing-library/react';
import Counter from 'components/counter/counter';
import userEvent from '@testing-library/user-event';

describe('Counter component', () => {
  beforeEach(() => {
    render(<Counter counter={0} />);
  });

  test('should render correctly initial value', () => {
    const textElement = screen.getByRole('heading');

    expect(textElement).toHaveTextContent(0);
  });

  test('should increase value after clicking increment button', async () => {
    // arrange
    const textElement = screen.getByRole('heading');
    const incrementButton = screen.getByRole('button', {
      name: 'increment'
    });

    // act
    await waitFor(() => {
      userEvent.click(incrementButton);
    });

    // assert
    expect(textElement).toHaveTextContent(1);
  });

  test('should decrease value after clicking decrement button', async () => {
    // arrange
    const textElement = screen.getByRole('heading');
    const decrementButton = screen.getByRole('button', {
      name: 'decrement'
    });

    // act
    await waitFor(() => {
      userEvent.click(decrementButton);
    });

    // assert
    expect(textElement).toHaveTextContent(-1);
  });
});