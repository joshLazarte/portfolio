import React from 'react';

import Navbar from './components/layout/Navbar';
import DesktopContainer from './components/layout/DesktopContainer';
import MobileContainer from './components/layout/MobileContainer';

import './assets/App.css';

import backgroundImage from './assets/images/bg-img.jpg';

const App = () => {
  return (
    <div style={backgroundStyle}>
      <Navbar name={'Nana'} />
      <DesktopContainer />
    </div>
  );
};

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh'
};

export default App;
