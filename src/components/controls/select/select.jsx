import React from 'react';
import Select from 'react-select';
import Label from '../label/label';
import { Controller } from 'react-hook-form';

const SelectInput = ({ options, id, label, control, placeholder, inputClass, isMulti = false, closeMenuOnSelect = true, onSelect, props }) => {
  const styles = {
    control: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: 'var(--dark-background-color)',
      border: 'none',
      height: '3rem'
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: 'var(--dark-background-color)',
      color: 'var(--primary-color)'
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isFocused ? 'var(--primary-color)' : 'var(--dark-background-color)'
    })
  };

  return (
    <div className={inputClass}>
      <Label inputId={id} label={label} />
      <Controller control={control} name='genres'
        render={({ field }) => (
          <Select
            onChange={onSelect}
            {...field}
            options={options}
            isMulti={isMulti}
            closeMenuOnSelect={closeMenuOnSelect}
            placeholder={placeholder}
            styles={styles}
          />
        )}
      />
    </div>
  );
};

export default SelectInput;