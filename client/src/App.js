import React from 'react';
import { Breakpoint, BreakpointProvider } from 'react-socks';

import DesktopContainer from './components/layout/desktop/DesktopContainer';
import MobileContainer from './components/layout/mobile/MobileContainer';

import './assets/css/App.css';
import backgroundImage from './assets/images/bg-img.jpg';

const App = () => {
  return (
    <BreakpointProvider>
      <div style={backgroundStyle}>
        <Breakpoint small down>
          <MobileContainer />
        </Breakpoint>

        <Breakpoint medium up>
          <DesktopContainer />
        </Breakpoint>
      </div>
    </BreakpointProvider>
  );
};

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh'
};

export default App;
