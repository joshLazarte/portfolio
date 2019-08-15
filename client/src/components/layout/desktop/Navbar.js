import React from 'react';

const Navbar = () => {
  return (
    <nav className='app-nav'>
      <div className='container'>
        <div className='app-nav__title'>
          <span className='name'>Josh Lazarte</span> |{' '}
          <span className='tag'>Developer</span>
        </div>
        <ul className='app-nav__list'>
          <li className='app-nav__list-item'>
            <a
              href='https://github.com/joshLazarte'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='icon brands fa-github' /> Github
            </a>
          </li>
          <li className='app-nav__list-item'>
            <a
              href='https://www.linkedin.com/in/josh-lazarte/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='icon brands fa-linkedin' /> LinkedIn
            </a>
          </li>
          <li className='app-nav__list-item'>
            <a href='/downloads/resume' download>
              <span className='icon solid fa-file' /> Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
