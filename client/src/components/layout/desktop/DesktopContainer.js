import React, { Fragment } from 'react';
import About from '../../sections/About';
import Navbar from './Navbar';
import MainMenu from './MainMenu';

const DesktopContainer = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='main-content'>
        <div className='main-display'>
          <About />
        </div>
        <MainMenu />
      </div>
    </Fragment>
  );
};

export default DesktopContainer;
