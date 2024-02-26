import { render, screen } from '@testing-library/react';
import Counter from '../components/counter/counter';
import userEvent from '@testing-library/user-event';

describe('Counter component', () => {
  test('renders correctly initial value', () => {
    render(<Counter counter={0} />);
    const textElement = screen.getByRole('heading');

    expect(textElement).toHaveTextContent(0);
  });

  test('increase value after clicking increment button', async () => {
    render(<Counter counter={0} />);
    const textElement = screen.getByRole('heading');
    const incrementButton = screen.getByRole('button', {
      name: 'increment'
    });

    await userEvent.click(incrementButton);

    expect(textElement).toHaveTextContent(1);
  });

  test('decrease value after clicking decrement button', async () => {
    render(<Counter counter={0} />);
    const textElement = screen.getByRole('heading');
    const decrementButton = screen.getByRole('button', {
      name: 'decrement'
    });

    await userEvent.click(decrementButton);

    expect(textElement).toHaveTextContent(-1);
  });
});