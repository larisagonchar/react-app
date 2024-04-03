import React from 'react';
import './button.css';

const Button = ({ type, title, className, onClick, disabled = false }) => {
  return(
    <button type={type} className={className ?? 'button'} onClick={onClick} disabled={disabled}>{title}</button>
  )
};

export default Button;