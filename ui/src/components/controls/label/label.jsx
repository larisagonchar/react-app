import React from 'react';
import './label.css';

const Label = ({ inputId, label }) => {
  return (
    <label
      htmlFor={inputId}
      className='label'>{label}</label>
  );
};

export default Label;