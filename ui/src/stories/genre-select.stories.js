import { expect, userEvent, within } from '@storybook/test';
import GenreSelect from 'src/components/genre-select/genre-select';
import { GENRES_LIST } from 'src/constants/genre.constants';

export default {
  title: 'GenreSelect',
  component: GenreSelect,
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
    genres: GENRES_LIST,
    onSelect: () => {}
  }
};

export const SelectGenre = {
  args: {
    ...Default.args,
    selectedGenre: GENRES_LIST[2].item
  },
  play: async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectedItem = canvas.getByText(GENRES_LIST[2].item);
    const newSelectedItem = canvas.getByText(GENRES_LIST[3].item);
    
    await expect(selectedItem).toHaveClass('genre-select__item_selected');

    await userEvent.click(newSelectedItem);
    await expect(newSelectedItem).toHaveClass('genre-select__item_selected');
    await expect(selectedItem).not.toHaveClass('genre-select__item_selected');
  }
}