import React from 'react';
import './delete-movie.css';
import Button from 'src/components/controls/button/button';

const DeleteMovie = () => {
  return (
    <>
      <span className='movie-delete__content'>Are you sure you want to delete this movie?</span>
      <div className='movie-delete__button'>
        <Button type='button' title='Confirm' />
      </div>
    </>
  );
};

export default DeleteMovie;