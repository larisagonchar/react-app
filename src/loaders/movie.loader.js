import MovieService from "src/services/movie.service";

const MovieLoader = {
  movieDetailsLoader: async ({ params }) => {
    return await MovieService.getMovieById(params.movieId);
  }
};

export default MovieLoader;