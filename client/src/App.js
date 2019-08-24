import React, { useEffect } from 'react';
import { loadReCaptcha } from 'react-recaptcha-v3';
import { Breakpoint, BreakpointProvider } from 'react-socks';

import DesktopContainer from './components/layout/desktop/DesktopContainer';
import MobileContainer from './components/layout/mobile/MobileContainer';
import SectionState from './context/section/SectionState';

import './assets/css/App.css';
import backgroundImage from './assets/images/bg-img.jpg';

const App = () => {
  useEffect(
    () => loadReCaptcha('6Ld4fbMUAAAAABmaT9Us2KbnmXOclZGOTe2VSL5b'),
    []
  );
  return (
    <BreakpointProvider>
      <SectionState>
        <div style={backgroundStyle}>
          <Breakpoint small down>
            <MobileContainer />
          </Breakpoint>

          <Breakpoint medium up>
            <DesktopContainer />
          </Breakpoint>
        </div>
      </SectionState>
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
