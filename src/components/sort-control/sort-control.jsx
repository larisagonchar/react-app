import React from 'react';
import './sort-control.css';
import { SORT_CONTROLS } from '../../constants/sort-control.constants';

const SortControl = ({ selectedControl, onSelect }) => {
  const handleSortControlSelect = (e) => {
    onSelect(e.target.value);
  };

  const options = SORT_CONTROLS.map(control => {
    return <option value={control.value} key={control.id} className='sort-control__option'>{control.value}</option>;
  })

  return (
    <div className='sort-control'>
      <label htmlFor='select' className='sort-control__label'>Sort By</label>
      <select id='select' data-testid='select' onChange={handleSortControlSelect} className='sort-control__select' value={selectedControl}>
        {options}
      </select>
    </div>
  );
};

export default SortControl;