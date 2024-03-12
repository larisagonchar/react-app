import React from 'react';
import Select from 'react-select';

const SelectInput = ({ options, placeholder, isMulti = false, closeMenuOnSelect = true, onSelect, props }) => {
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
    <Select
      onChange={onSelect}
      {...props}
      options={options}
      isMulti={isMulti}
      closeMenuOnSelect={closeMenuOnSelect}
      placeholder={placeholder}
      styles={styles}
    />
  );
};

export default SelectInput;