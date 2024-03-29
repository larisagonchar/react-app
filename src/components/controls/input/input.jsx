import React from 'react';
import './input.css';

const Input = ({ control, placeholder, type, register }) => {
  return (
    <input
      id={control}
      className='input'
      placeholder={placeholder}
      type={type}
      {...register(control, { required: 'This field is required' })}
    />
  );
};

export default Input;