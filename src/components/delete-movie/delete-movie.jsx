import React from 'react';
import './delete-movie.css';
import Button from 'src/components/controls/button/button';

const DeleteMovie = () => {
  return (
    <div className='movie-delete'>
      <span>Are you sure you want to delete this movie?</span>
      <div className='movie-delete__button'>
        <Button type={'button'} title={'Confirm'} />
      </div>
    </div>
  );
};

export default DeleteMovie;