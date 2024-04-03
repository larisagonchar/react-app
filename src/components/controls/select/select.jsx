import React from 'react';
import Select from 'react-select';
import Label from '../label/label';
import { Controller } from 'react-hook-form';
import { OverridedReactSelectStyles } from './select.style';
import ErrorLabel from '../error-label/error-label';

const SelectInput = ({ options, id, label, control, placeholder, inputClass, isMulti = false, closeMenuOnSelect = true, errorMessage, validationRules }) => {
  return (
    <div className={inputClass}>
      <Label inputId={id} label={label} />
      <Controller control={control} name={id} rules={validationRules}
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
      {errorMessage && <ErrorLabel label={errorMessage} />}
    </div>
  );
};

export default SelectInput;