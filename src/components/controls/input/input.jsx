import React from 'react';
import './input.css';
import Label from '../label/label';
import ErrorLabel from '../error-label/error-label';

const Input = ({ id, placeholder, type, label, errorMessage, register, inputClass, validationRules }) => {
  return (
    <div className={inputClass}>
      {label && <Label inputId={id} label={label} /> }
      <input
        id={id}
        className='input'
        placeholder={placeholder}
        type={type}
        {...register(id, validationRules )}
      />
      { errorMessage && <ErrorLabel label={errorMessage} /> }
    </div>
  );
};

export default Input;