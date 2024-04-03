import React from 'react';
import './search-form.css';
import Button from 'src/components/controls/button/button';
import Input from 'src/components/controls/input/input';
import { useForm } from 'react-hook-form';
import { useOutletContext } from 'react-router-dom';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useOutletContext();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      search: searchQuery
    }
  });

  const handleSubmitClick = (value) => {
    setSearchQuery(value.search);
  }

  const handleResetClick = () => {
    setValue('search', null);
    setSearchQuery(null);
  }

  return (
    <form className='search-form' onSubmit={handleSubmit((data) => handleSubmitClick(data))}>
      <Input id='search' placeholder='What do you want to watch?' type='text' isLabel={false}
        register={register} inputClass='search-form__input'/>
      {searchQuery && <Button type='button' title='reset' onClick={handleResetClick}/>}
      <Button type='submit' title='search'/>
    </form>
  );
}

export default SearchForm;