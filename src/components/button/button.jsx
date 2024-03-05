import React from 'react';

const Button = ({ type, title, className, onClick }) => {
  return(
    <button type={type} className={className} onClick={onClick}>{title}</button>
  )
};

export default Button;