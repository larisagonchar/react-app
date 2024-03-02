import MovieDetails from '../components/movie-details/movie-details';

export default {
  title: 'MovieDetails',
  component: MovieDetails
};

export const Default = {
  args: {
    selectedMovie: {
      genres: ['Action', 'Adventure'],
      release_date: 2004,
      title: 'Pulp Fiction',
      vote_average: 9.8,
      overview: 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
      runtime: 130,
      poster_path: ''
    }
  }
};