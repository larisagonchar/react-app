import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Dialog from 'src/components/dialog/dialog';
import MovieForm from 'src/components/movie-form/movie-form';
import { DIALOG } from 'src/constants/dialog-type.constants';

const EditMovie = () => {
  const movie = useLoaderData();

  return(
    <Dialog title={DIALOG.TITLE.EDIT_MOVIE}>
      <MovieForm movie={movie} type={DIALOG.TYPE.EDIT}/>
    </Dialog>
  );
};

export default EditMovie;