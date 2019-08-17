import React, { Fragment, useState } from 'react';
import MobileMenu from './MobileMenu';

const MobileNavbar = () => {
  const [menuState, toggleShowMenu] = useState({
    showMenu: false
  });

  const { showMenu } = menuState;

  const toggleMenu = e => {
    e.preventDefault();
    toggleShowMenu({ showMenu: !showMenu });
  };

  return (
    <Fragment>
      <nav className='app-nav'>
        <div className='container'>
          <div className='app-nav__title'>Josh Lazarte</div>
          <a href='!#' onClick={toggleMenu} className='app-nav__menu-btn'>
            <span className='icon solid fa-bars' />
          </a>
        </div>
      </nav>
      {showMenu && <MobileMenu toggleMenu={toggleMenu} />}
    </Fragment>
  );
};

export default MobileNavbar;
