import './App.css';
import Counter from './components/counter/counter';
import GenreSelect from './components/genre-select/genre-select';
import SearchForm from './components/search-form/search-form';

function App() {
  const genreList = ['ALL', 'Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Family', 'Thriller'];
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
