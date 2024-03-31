import React from 'react';
import './movie-form.css';
import { useForm } from 'react-hook-form';
import { GENRES_LIST } from 'src/constants/genre.constants';
import Button from '../controls/button/button';
import Input from '../controls/input/input';
import SelectInput from '../controls/select/select';
import TextArea from '../controls/textarea/textarea';
import { mapObjectToSelectInput, mapStringsToSelectInput } from 'src/mappers/select.mapper';
import { mapFormDataToSubmitRequest, mapMovieToFormData } from 'src/mappers/movie-form.mapper';

const MovieForm = ({ onSubmit, movie }) => {
  const genresList = JSON.parse(JSON.stringify(GENRES_LIST));
  genresList.shift();

  const genresOptions = mapObjectToSelectInput(genresList);
  const selectedGenresOptions = mapStringsToSelectInput(movie?.genres);

  const { register, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: mapMovieToFormData(movie, selectedGenresOptions)
  });

  const handleSubmitPress = (data) => {
    const body = mapFormDataToSubmitRequest(data);
    onSubmit(body);
  }

  return (
    <form className='movie-form__form' onSubmit={handleSubmit((data) => handleSubmitPress(data))}>
      <div className='movie-form__controls'>
        <Input id='title' type='text' register={register}
          label='Title' errorMessage={errors.title?.message} />
        <Input id='release_date' type='date' register={register}
          placeholder='Select Date' label='Release Date'
          errorMessage={errors.release_date?.message} />

        <Input id='poster_path' type='text' placeholder='https://' label='Movie url'
          register={register} errorMessage={errors.poster_path?.message} />
        <Input id='vote_average' type='text' placeholder='7.8'
          register={register} label='Rating' errorMessage={errors.rating?.message} />

        <SelectInput options={genresOptions} placeholder='Select Genre' control={control}
          closeMenuOnSelect={false} isMulti={true} id='genres' label='Genre' />
        <Input id='runtime' type='text' placeholder='minutes'
          register={register} label='Runtime' errorMessage={errors.runtime?.message} />

        <TextArea id='overview' placeholder='Movie description' inputClass='movie-form__control'
          register={register} label='Overview' errorMessage={errors.overview?.message} />
      </div>

      <div className='movie-form__buttons-container'>
        <Button type='button' title='Reset' className='movie-form__button_reset' />
        <Button type='submit' title='Submit' />
      </div>
    </form>
  )
};

export default MovieForm;