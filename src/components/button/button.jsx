import React from 'react';
import './button.css';

const Button = ({ onClick, type, title }) => {
  return(
    <button type={type} className='button' onClick={onClick}>{title}</button>
  )
};

export default Button;