import Counter from './components/counter/counter';
import GenreSelect from './components/genre-select/genre-select';
import SearchForm from './components/search-form/search-form';
import { GENRES_LIST } from './constants/genre.constants';
import './styles/reset.css';

function App() {
  const genreList = GENRES_LIST;
  const selectedGenre = 'Comedy';
  
  const handleSearch = (search) => {
    console.log(search);
  }

  const handleSelectGenre = (genre) => {
    console.log(genre);
  }

  return (
    <>
      <Counter counter='0' />
      <SearchForm searchQuery='' onSearch={handleSearch}/>
      <GenreSelect genres={genreList} selectedGenre={selectedGenre} onSelect={handleSelectGenre}/>
    </>
  );
}

export default App;
