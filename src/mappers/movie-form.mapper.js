import { mapListToSelectInput } from "./select.mapper";

export const mapMovieToFormData = (movie) => {
  return {
    title: movie ? movie.title : '',
    release_date: movie ? movie.release_date : '',
    poster_path: movie ? movie.poster_path : '',
    vote_average: movie ? movie.vote_average : '',
    runtime: movie ? movie.runtime : '',
    overview: movie ? movie.overview : '',
    genres: mapListToSelectInput(movie?.genres)
  }
};

export const mapFormDataToSubmitRequest = (data) => {
  return {
    ...data,
    vote_average: +data.vote_average,
    runtime: +data.runtime,
    genres: data.genres.map(genre => genre.value)
  };
};