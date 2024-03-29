import React from 'react';
import './label.css';

const Label = ({ control, label }) => {
  return (
    <label
      htmlFor={control}
      className='label'>{label}</label>
  );
};

export default Label;