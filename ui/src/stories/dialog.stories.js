import { movieDetailsMock } from 'src/__mocks__/movie-details';
import DeleteMovie from 'src/components/delete-movie/delete-movie';
import Dialog from 'src/components/dialog/dialog';
import MovieForm from 'src/components/movie-form/movie-form';


export default {
  title: 'Dialog',
  component: Dialog
};

export const AddMovieModal = {
  args: {
    title: 'Add movie',
    children: <MovieForm/>,
    onClose: () => { }
  }
};

export const EditMovieModal = {
  args: {
    title: 'Edit movie',
    children: <MovieForm movie={movieDetailsMock}/>,
    onClose: () => { }
  }
};

export const DeleteMovieModal = {
  args: {
    title: 'Delete movie',
    children: <DeleteMovie/>,
    onClose: () => { }
  }
};