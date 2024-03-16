import React from 'react';
import './sort-control.css';
import { SORT_CONTROLS } from 'src/constants/sort-control.constants';
import Label from '../controls/label/label';
import SelectInput from '../controls/select/select';

const SortControl = ({ selectedControl, onSelect }) => {
  const handleSortControlSelect = (e) => {
    onSelect(e.value);
  };

  return (
    <div className='sort-control'>
      <Label inputId='select' label='Sort By' />
      <SelectInput
        onSelect={handleSortControlSelect}
        options={SORT_CONTROLS}
        props={{
          value: selectedControl
        }}
      />
    </div>
  );
};

export default SortControl;