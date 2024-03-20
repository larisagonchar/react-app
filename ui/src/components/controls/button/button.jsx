import React from 'react';
import './button.css';

const Button = ({ type, title, className, onClick }) => {
  return(
    <button type={type} className={className ?? 'button'} onClick={onClick}>{title}</button>
  )
};

export default Button;