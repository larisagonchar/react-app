import React from 'react';
import './context-menu.css';
import Button from '../controls/button/button';
import ButtonClose from '../controls/button-close/button-close';

const ContextMenu = ({ onClick }) => {
  return (
    <div className='context-menu'>
      <ButtonClose onClick={onClick}/>
      <Button type='button' title='Edit' className='context-menu__button' />
      <Button type='button' title='Delete' className='context-menu__button' />
    </div>
  );
};

export default ContextMenu;