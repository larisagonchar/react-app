import React from 'react';
import './context-menu.css';
import closeImg from '../../../assets/close.png';
import Button from '../button/button';

const ContextMenu = ({ onClick }) => {
  return (
    <>
      <div className='context-menu'>
        <img className='context-menu__img' src={closeImg} alt='close' onClick={onClick} />
        <Button type={'button'} title={'Edit'} className={'context-menu__button'} />
        <Button type={'button'} title={'Delete'} className={'context-menu__button'} />
      </div>
    </>
  );
};

export default ContextMenu;