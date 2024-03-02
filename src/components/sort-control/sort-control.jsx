import React from 'react';
import './sort-control.css';

const SortControl = ({ selectedControl, onSelect }) => {
  const handleSortControlSelect = (e) => {
    onSelect(e.target.value);
  }

  return (
    <div className="sort-control">
      <label className='sort-control__label'>Sort By</label>
      <select data-testid="select" onChange={handleSortControlSelect} className='sort-control__select' value={selectedControl}>
        <option value={'title'} key={'title'} className='sort-control__option'>Title</option>
        <option value={'release_date'} key={'release_date'} className='sort-control__option'>Release Date</option>
      </select>
    </div>
  );
};

export default SortControl;