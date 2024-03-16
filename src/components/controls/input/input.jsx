import React from 'react';
import './input.css';
import Label from '../label/label';
import ErrorLabel from '../error-label/error-label';

const Input = ({ id, placeholder, type, label, errorMessage, register, inputClass }) => {
  return (
    <div className={inputClass}>
      <Label inputId={id} label={label} />
      <input
        id={id}
        className='input'
        placeholder={placeholder}
        type={type}
        {...register(id, { required: 'This field is required' })}
      />
      <ErrorLabel errorMessage={errorMessage} />
    </div>
  );
};

export default Input;