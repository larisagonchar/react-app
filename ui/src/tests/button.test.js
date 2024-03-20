/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react';
import Button from 'src/components/controls/button/button';

const testProps = {
  onClick: jest.fn(),
  title: 'Submit',
  type: 'submit',
  className: 'class',
};


describe('Button component', () => {
  beforeEach(() => {
    render(<Button {...testProps} />);
  });

  test('should render button with passed type', () => {
    const button = screen.getByRole('button');
    expect(button.type).toBe('submit');
  });

  test('should render button with passed title', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Submit');
  });

  test('should render button with passed class', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveClass('class');
  });
});