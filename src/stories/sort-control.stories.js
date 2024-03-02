import SortControl from '../components/sort-control/sort-control';

export default {
  title: 'SortControl',
  component: SortControl,
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

export const Default = {
  args: {
    selectedControl: 'Title',
    onSelect: () => {}
  }
};