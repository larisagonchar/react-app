import React from 'react';
import closeImg from 'src/assets/close.png';
import './button-close.css';

const ButtonClose = ({ onClose }) => {
  return (
    <button className='button-close' type='button' aria-label='Close' onClick={onClose}>
      <img src={closeImg} alt='close' />
    </button>
  );
};

export default ButtonClose;