import React from 'react';
import Dialog from 'src/components/dialog/dialog';
import MovieForm from 'src/components/movie-form/movie-form';

const EditMovie = ({ movie }) => {
  return(
    <Dialog title={'Edit Movie'} onClose={() => {}}>
      <MovieForm movie={movie}/>
    </Dialog>
  );
};

export default EditMovie;