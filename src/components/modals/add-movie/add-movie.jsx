import React from 'react';
import Dialog from 'src/components/dialog/dialog';
import MovieForm from 'src/components/movie-form/movie-form';
import { DIALOG } from 'src/constants/dialog-type.constants';

const AddMovie = () => {
  return (
    <Dialog title={DIALOG.TITLE.ADD_MOVIE}>
      <MovieForm type={DIALOG.TYPE.ADD}/>
    </Dialog>
  );
};

export default AddMovie;