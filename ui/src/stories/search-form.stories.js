import { expect, userEvent, within } from '@storybook/test';
import SearchForm from 'src/components/search-form/search-form';

export default {
  title: 'SearchForm',
  component: SearchForm
};

export const Search = {
  args: {
    searchQuery: '',
    onSearch: () => {}
  },
  play: async({ canvasElement }) => {
    const canvas = within(canvasElement);
    const search = canvas.getByLabelText('search');
    
    await userEvent.type(search, 'movie');
    await expect(search).toHaveValue('movie');
  }
}