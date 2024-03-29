import React from 'react';
import closeImg from 'src/assets/close.png';
import './button-close.css';

const ButtonClose = ({ onClose }) => {
  return (
    <button className='button-close' type='button' aria-label='Close'>
      <img src={closeImg} alt='close' onClick={onClose} />
    </button>
  );
};

export default ButtonClose;