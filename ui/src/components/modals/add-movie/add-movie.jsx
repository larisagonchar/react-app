import React from 'react';
import Dialog from 'src/components/dialog/dialog';
import MovieForm from 'src/components/movie-form/movie-form';

const AddMovie = () => {
  return (
    <Dialog title='Add Movie' onClose={() => {}}>
      <MovieForm/>
    </Dialog>
  );
};

export default AddMovie;