import React from 'react';
import './search-form.css';
import Button from 'src/components/controls/button/button';
import Input from 'src/components/controls/input/input';
import { useForm } from 'react-hook-form';

const SearchForm = ({ searchQuery, onSearch }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      search: searchQuery
    }
  });

  const handleSubmitPress = (value) => {
    onSearch(value.search);
  }

  return (
    <form className='search-form' onSubmit={handleSubmit((data) => handleSubmitPress(data))}>
      <Input id='search' placeholder='What do you want to watch?' type='text' isLabel={false}
        register={register} inputClass='search-form__input'/>
      <Button type='submit' title='search'/>
    </form>
  );
}

export default SearchForm;