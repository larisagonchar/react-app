/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import ErrorLabel from 'src/components/controls/error-label/error-label';

test('ErrorLabel component should render error message', () => {
  render(<ErrorLabel label='error message' />);
  const errorLabel = screen.getByTestId('error');

  expect(errorLabel).toHaveTextContent('error message');
});