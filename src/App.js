import React, { useState } from 'react';
import MenuButton from './components/MenuButton';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const menuList = [
    'Blood Glucose',
    'Medication',
    'Food Tracking',
    'Exercise',
    'Weight Management',
    'Blood Pressure',
    'A1C',
  ];

  const handleChangePage = (index) => {
    setCurrentPage(index);
  };

  const pageIndicators = Array.from(Array(5), (e, index) => (
    <span
      key={index}
      className={`App-indicator` + (index === currentPage ? '-selected' : '')}
      onClick={(e) => {
        handleChangePage(index);
      }}
    />
  ));

  return (
    <div className='App'>
      <h1 className='App-title'>What are your main areas of focus?</h1>
      <h3 className='App-title'>
        This will help us build a personalized experience for you
      </h3>
      <div className='App-grid-menu'>
        {menuList.map((menuItem, index) => (
          <MenuButton
            selected={selectedMenu === index}
            key={index}
            onClick={(e) => setSelectedMenu(index)}
          >
            {menuItem}
          </MenuButton>
        ))}
      </div>
      <div className='App-tool-bar'>
        <button className='button-gray space-regular'>BACK</button>
        <div className='App-indicator-container'>{pageIndicators}</div>
        <button className='button-primary space-regular'>DONE</button>
      </div>
    </div>
  );
}

export default App;
