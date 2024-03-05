import { movieTileMock } from '../__mocks__/movie-tile';
import MovieTile from '../components/movie-tile/movie-tile';

export default {
  title: 'MovieTile',
  component: MovieTile,
  parameters: {
    layout: 'centered'
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
    movie: movieTileMock,
    onClick: () => { }
  }
};