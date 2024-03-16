
import React from 'react';
import './movie-form.css';
import { Controller, useForm } from 'react-hook-form';
import { GENRES_LIST } from 'src/constants/genre.constants';
import Button from '../controls/button/button';
import Label from '../controls/label/label';
import Input from '../controls/input/input';
import ErrorLabel from '../controls/error-label/error-label';
import Textarea from '../controls/textarea/textarea';
import SelectInput from '../controls/select/select';

const MovieForm = ({ onSubmit, movie }) => {
  const genresList = JSON.parse(JSON.stringify(GENRES_LIST));
  genresList.shift();

  const genresOptions = genresList.map(genre => {
    return {
      value: genre.item,
      label: genre.item
    }
  });

  const selectedGenreList = movie?.genres.map(genre => {
    return {
      value: genre,
      label: genre
    }
  });

  const { register, handleSubmit, formState: { errors }, control } = useForm({
    defaultValues: {
      title: movie ? movie.title : '',
      release_date: movie ? movie.release_date : '',
      poster_path: movie ? movie.poster_path : '',
      vote_average: movie ? movie.vote_average : '',
      runtime: movie ? movie.runtime : '',
      overview: movie ? movie.overview : '',
      genres: selectedGenreList
    }
  });

  const handleSubmitPress = (data) => {
    const body = {
      ...data,
      vote_average: +data.vote_average,
      runtime: +data.runtime,
      genres: data.genres.map(genre => genre.value)
    };

    onSubmit(body);
  }

  return (
    <form className='movie-form__form' onSubmit={handleSubmit((data) => handleSubmitPress(data))}>
      <div className='movie-form__control-container'>
        <div className='movie-form__control'>
          <Label control={'title'} label={'Title'} />
          <Input control={'title'} type={'text'} register={register} />
          <ErrorLabel errorMessage={errors.title?.message} />
        </div>

        <div className='movie-form__control'>
          <Label control={'release_date'} label={'Release Date'} />
          <Input control={'release_date'} type={'date'} register={register} placeholder={'Select Date'} />
          <ErrorLabel errorMessage={errors.release_date?.message} />
        </div>
      </div>

      <div className='movie-form__control-container'>
        <div className='movie-form__control'>
          <Label control={'poster_path'} label={'Movie url'} />
          <Input control={'poster_path'} type={'text'} placeholder={'https://'} register={register} />
          <ErrorLabel errorMessage={errors.poster_path?.message} />
        </div>

        <div className='movie-form__control'>
          <Label control={'rating'} label={'Rating'} />
          <Input control={'rating'} type={'text'} placeholder={'7.8'} register={register} />
          <ErrorLabel errorMessage={errors.rating?.message} />
        </div>
      </div>

      <div className='movie-form__control-container'>
        <div className='movie-form__control'>
          <Label control={'genres'} label={'Genre'} />
          <Controller
            control={control}
            name='genres'
            render={({ field }) => (
              <SelectInput
                options={genresOptions}
                placeholder={'Select Genre'}
                closeMenuOnSelect={false}
                isMulti={true}
                props={field}
              />
            )}
          />
        </div>

        <div className='movie-form__control'>
          <Label control={'runtime'} label={'Runtime'} />
          <Input control={'runtime'} type={'text'} placeholder={'minutes'} register={register} />
          <ErrorLabel errorMessage={errors.runtime?.message} />
        </div>
      </div>

      <div className='movie-form__control-container'>
        <div className='movie-form__control'>
          <Label control={'overview'} label={'Runtime'} />
          <Textarea control={'overview'} placeholder={'Movie description'} register={register} />
          <ErrorLabel errorMessage={errors.overview?.message} />
        </div>
      </div>

      <div className='movie-form__buttons-container'>
        <Button type={'button'} title={'Reset'} className={'movie-form__button_reset'} />
        <Button type={'submit'} title={'Submit'} />
      </div>
    </form>
  )
};

export default MovieForm;