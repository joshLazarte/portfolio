import React, { Fragment } from 'react';
import MobileNavbar from './MobileNavbar';
import About from '../../sections/About';

const MobileContainer = () => {
  return (
    <Fragment>
      <MobileNavbar />
      <div className='main-display'>
        <About />
      </div>
    </Fragment>
  );
};

export default MobileContainer;
