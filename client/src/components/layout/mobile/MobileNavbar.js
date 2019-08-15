import React from 'react';

const MobileNavbar = () => {
  return (
    <nav className='app-nav'>
      <div className='container'>
        <div className='app-nav__title'>Josh Lazarte</div>
        <a href='!#' className='app-nav__menu-btn'>
          <span className='icon solid fa-bars' />
        </a>
      </div>
    </nav>
  );
};

export default MobileNavbar;
