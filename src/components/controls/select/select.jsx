import React from 'react';
import Select from 'react-select';
import Label from '../label/label';
import { Controller } from 'react-hook-form';
import { OverridedReactSelectStyles } from './select.style';

const SelectInput = ({ options, id, label, control, placeholder, inputClass, isMulti = false, closeMenuOnSelect = true }) => {
  return (
    <div className={inputClass}>
      <Label inputId={id} label={label} />
      <Controller control={control} name={id}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            isMulti={isMulti}
            closeMenuOnSelect={closeMenuOnSelect}
            placeholder={placeholder}
            styles={OverridedReactSelectStyles}
          />
        )}
      />
    </div>
  );
};

export default SelectInput;