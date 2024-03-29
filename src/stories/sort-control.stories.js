import SortControl from 'src/components/sort-control/sort-control';
import { SORT_CONTROLS } from 'src/constants/sort-control.constants';

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
    selectedControl: SORT_CONTROLS[0],
    onSelect: () => {}
  }
};