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
      <nav className='nav'>
        <div className='container'>
          <a href='/' className='nav__title'>
            Josh Lazarte
          </a>
          <a href='!#' onClick={toggleMenu} className='nav__menu-btn'>
            <span className='icon solid fa-bars' />
          </a>
        </div>
      </nav>
      {showMenu && <MobileMenu toggleMenu={toggleMenu} />}
    </Fragment>
  );
};

export default MobileNavbar;
