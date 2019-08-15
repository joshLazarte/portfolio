import React from 'react';
import About from '../sections/About';
import MainMenu from './MainMenu';

const DesktopContainer = () => {
  return (
    <div className='main-content'>
      <div className='main-display'>
        <About />
      </div>
      <MainMenu />
    </div>
  );
};

export default DesktopContainer;
