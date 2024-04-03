import React from 'react';
import './textarea.css';
import Label from '../label/label';
import ErrorLabel from '../error-label/error-label';

const TextArea = ({ id, placeholder, label, errorMessage, inputClass, register }) => {
  return (
    <div className={inputClass}>
      <Label inputId={id} label={label} />
      <textarea
        id={id}
        className='textarea'
        placeholder={placeholder}
        {...register(id, { required: 'This field is required' })}
      />
      <ErrorLabel label={errorMessage} />
    </div>
  );
};

export default TextArea;