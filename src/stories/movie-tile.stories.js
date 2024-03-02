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
    movie: {
      genres: ['Action', 'Adventure'],
      release_date: 2004,
      title: 'Pulp Fiction',
      poster_path: ''
    },
    onClick: () => { }
  }
};