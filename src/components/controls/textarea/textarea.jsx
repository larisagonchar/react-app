import React from 'react';
import './textarea.css';

const Textarea = ({ control, placeholder, register }) => {
  return (
    <textarea
      id={control}
      className='textarea'
      placeholder={placeholder}
      {...register(control, { required: 'This field is required' })}
    />
  );
};

export default Textarea;