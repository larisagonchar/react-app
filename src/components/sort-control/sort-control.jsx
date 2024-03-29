import React, { useEffect } from 'react';
import './sort-control.css';
import { SORT_CONTROLS } from 'src/constants/sort-control.constants';
import SelectInput from '../controls/select/select';
import { useForm } from 'react-hook-form';
import { mapObjectToSelectInput } from 'src/mappers/select.mapper';

const SortControl = ({ selectedControl, onSelect }) => {
  const selectOptions = mapObjectToSelectInput(SORT_CONTROLS);

  const { control, watch } = useForm({
    defaultValues: {
      sortControl: mapObjectToSelectInput([selectedControl])[0]
    }
  });

  useEffect(() => {
    const subscription = watch((value) => {
      if (value.sortControl.id !== selectedControl.id) {
        onSelect(value.sortControl)
      }
    });
    return () => subscription.unsubscribe();
  }, [onSelect, selectedControl, watch]);

  return (
    <SelectInput
      placeholder='Select genre'
      options={selectOptions}
      control={control}
      id='sortControl'
      label='Sort By'
      inputClass='sort-control'
    />
  );
};

export default SortControl;