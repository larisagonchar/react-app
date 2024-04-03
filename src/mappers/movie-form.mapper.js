import { formatTime } from "src/formatters/time.formatter";

export const mapMovieToFormData = (movie, genres) => {
  return {
    title: movie ? movie.title : '',
    release_date: movie ? movie.release_date : '',
    poster_path: movie ? movie.poster_path : '',
    vote_average: movie ? movie.vote_average : '',
    runtime: movie ? movie.runtime : '',
    overview: movie ? movie.overview : '',
    genres
  }
};

export const mapFormDataToSubmitRequest = (data, movie) => {
  return {
    ...movie,
    ...data,
    genres: data.genres.map(genre => genre.value)
  };
};

export const mapMovieFromServiceToUIMovie = (movie) => {
  return {
    ...movie,
    release_date: new Date(movie.release_date).getFullYear(),
    runtime: formatTime(movie.runtime)
  }
}