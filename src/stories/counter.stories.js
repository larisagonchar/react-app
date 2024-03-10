import { expect, userEvent, within } from '@storybook/test';
import Counter from '../components/counter/counter';

export default {
  title: 'Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ background: 'black', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CounterData = {
  args: {
    counter: 0
  }
};

export const Increment = {
  args: CounterData.args,
  play: async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const incrementButton = canvas.getByRole('button', { name: 'increment' });
    const heading = canvas.getByRole('heading');
    
    await userEvent.click(incrementButton);
    await expect(heading).toHaveTextContent(CounterData.args.counter + 1);
  }
}

export const Decrement = {
  args: CounterData.args,
  play: async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const decrementButton = canvas.getByRole('button', { name: 'decrement' });
    const heading = canvas.getByRole('heading');
    
    await userEvent.click(decrementButton);
    await expect(heading).toHaveTextContent(CounterData.args.counter - 1);
  }
}
