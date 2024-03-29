import React from 'react';
import './page-controls.css';
import GenreSelect from 'src/components/genre-select/genre-select';
import SortControl from 'src/components/sort-control/sort-control';
import { GENRES_LIST } from 'src/constants/genre.constants';

const PageControls = ({selectedGenres, onSelectGenres, selectedControl, onSelectSortControl}) => {

  return (
    <div className='page-controls'>
      <GenreSelect genres={GENRES_LIST} selectedGenres={selectedGenres} onSelect={onSelectGenres} />
      <SortControl selectedControl={selectedControl} onSelect={onSelectSortControl} />
    </div>
  );
};

export default PageControls;