import './App.css';
import Counter from './components/counter/counter';
import SearchForm from './components/search-form/search-form';

function App() {
  const handleSearch = (search) => {
    console.log(search);
  }

  return (
    <>
      <Counter counter='0' />
      <SearchForm searchQuery='' onSearch={handleSearch}/>
    </>
  );
}

export default App;
