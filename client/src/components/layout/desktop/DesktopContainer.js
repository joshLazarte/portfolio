import React, { Fragment } from 'react';
import MainContent from '../../MainContent';
import Navbar from './Navbar';
import MainMenu from './MainMenu';

const DesktopContainer = () => {
  return (
    <Fragment>
      <Navbar />
      <div className='main-content'>
        <MainContent />
        <MainMenu />
      </div>
    </Fragment>
  );
};

export default DesktopContainer;
