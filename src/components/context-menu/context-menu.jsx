import React from 'react';
import './context-menu.css';
import Button from '../controls/button/button';
import ButtonClose from '../controls/button-close/button-close';

const ContextMenu = ({ onContextMenuClick, onEditClick }) => {
  return (
    <div className='context-menu'>
      <ButtonClose onClose={onContextMenuClick}/>
      <Button type='button' title='Edit' className='context-menu__button' onClick={onEditClick}/>
      <Button type='button' title='Delete' className='context-menu__button' />
    </div>
  );
};

export default ContextMenu;