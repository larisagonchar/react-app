import { GENRE_ALL } from "src/constants/genre.constants";

export const getSelectedGenresHelper = (selectedGenre, genres) => {
  const selectedGenres = [...genres];

  if (selectedGenre === GENRE_ALL) {
    return [selectedGenre];
  }

  const isAllGenreExist = selectedGenres.find(genre => genre === GENRE_ALL);

  if (isAllGenreExist) {
    selectedGenres[0] = selectedGenre;
    return selectedGenres;
  }

  const selectedGenreIndex = selectedGenres.findIndex(genre => genre === selectedGenre);

  if (selectedGenreIndex !== -1) {
    selectedGenres.splice(selectedGenreIndex, 1);
    return selectedGenres.length ? selectedGenres : [GENRE_ALL];
  }
  
  selectedGenres.push(selectedGenre);
  return selectedGenres;
}