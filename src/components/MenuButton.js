import React from 'react';
import './MenuButton.css';

const MenuButton = ({ children, selected, onClick }) => {
  return (
    <button
      className={'App-button' + (selected ? '-selected' : '')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MenuButton;
