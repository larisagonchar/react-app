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
import { DIALOG } from 'src/constants/dialog-type.constants';
import MovieService from 'src/services/movie.service';
import { getValidationRules } from 'src/helpers/valudation.helper';
import { useNavigate } from 'react-router-dom';

const MovieForm = ({ movie, type }) => {
  const navigate = useNavigate();

  const genresList = JSON.parse(JSON.stringify(GENRES_LIST));
  genresList.shift();

  const genresOptions = mapObjectToSelectInput(genresList);
  const selectedGenresOptions = mapStringsToSelectInput(movie?.genres);

  const { register, handleSubmit, formState: { errors, isDirty }, control, reset } = useForm({
    defaultValues: mapMovieToFormData(movie, selectedGenresOptions)
  });

  const validationRules = getValidationRules();

  const handleSubmitClick = async (data) => {
    const body = mapFormDataToSubmitRequest(data, movie);
    
    if (type === DIALOG.TYPE.ADD) {
      await MovieService.addMovie(body);
    } else {
      await MovieService.editMovie(body);
    }

    navigate('/');
  };

  const handleResetClick = () => {
    reset();
  };

  return (
    <form className='movie-form__form' onSubmit={handleSubmit((data) => handleSubmitClick(data))}>
      <div className='movie-form__controls'>
        <Input id='title' type='text' register={register}
          label='Title' errorMessage={errors.title?.message}
          validationRules={validationRules.title} />

        <Input id='release_date' type='date' register={register}
          placeholder='Select Date' label='Release Date'
          errorMessage={errors.release_date?.message}
          validationRules={validationRules.release_date} />

        <Input id='poster_path' type='url' placeholder='https://' label='Movie url'
          register={register} errorMessage={errors.poster_path?.message}
          validationRules={validationRules.poster_path} />

        <Input id='vote_average' type='text' placeholder='7.8'
          register={register} label='Rating' errorMessage={errors.vote_average?.message}
          validationRules={validationRules.vote_average} />

        <SelectInput options={genresOptions} placeholder='Select Genre' control={control}
          closeMenuOnSelect={false} isMulti={true} id='genres' label='Genre'
          errorMessage={errors.genres?.message} validationRules={validationRules.genres} />

        <Input id='runtime' type='number' placeholder='minutes'
          register={register} label='Runtime' errorMessage={errors.runtime?.message}
          validationRules={validationRules.runtime} />

        <TextArea id='overview' placeholder='Movie description' inputClass='movie-form__control'
          register={register} label='Overview' errorMessage={errors.overview?.message}
          validationRules={validationRules.overview} />
      </div>

      <div className='movie-form__buttons-container'>
        <Button type='button' title='Reset' className='movie-form__button_reset' onClick={handleResetClick} />
        <Button type='submit' title='Submit' disabled={!isDirty} />
      </div>
    </form>
  )
};

export default MovieForm;