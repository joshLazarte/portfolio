import React, { Fragment } from 'react';
import MobileNavbar from './MobileNavbar';
import MainContent from '../../MainContent';

const MobileContainer = () => {
  return (
    <Fragment>
      <MobileNavbar />
      <MainContent />
    </Fragment>
  );
};

export default MobileContainer;
