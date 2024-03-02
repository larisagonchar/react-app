import React from 'react';
import './context-menu.css';
import closeImg from '../../../assets/close.png';

const ContextMenu = ({ onClick }) => {
  return (
    <>
      <div className='context-menu'>
        <img className='context-menu__img' src={closeImg} alt='close' onClick={onClick} />
        <div className='context-menu__item'>Edit</div>
        <div className='context-menu__item'>Delete</div>
      </div>
    </>
  );
};

export default ContextMenu;