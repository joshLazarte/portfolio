import React, { useContext } from 'react';
import SectionContext from '../../../context/section/sectionContext';

const MobileMenu = props => {
  const sectionContext = useContext(SectionContext);
  const {
    currentSection,
    renderAbout,
    renderSkills,
    renderProjects,
    renderContact
  } = sectionContext;

  const onClick = (renderFunction, e) => {
    props.toggleMenu(e);
    renderFunction();
  };

  return (
    <div className='menu-container menu-container--mobile'>
      <ul className='main-menu'>
        <li className='main-menu__item main-menu__item--mobile main-menu__item--multi-link'>
          <a
            href='https://github.com/joshLazarte'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='icon brands fa-github' /> Github
          </a>
          <a
            href='https://www.linkedin.com/in/josh-lazarte/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='icon brands fa-linkedin' /> LinkedIn
          </a>
          <a href='/downloads/resume' download>
            <span className='icon solid fa-file' /> Resume
          </a>
        </li>
        <li className='main-menu__item'>
          <a
            className={
              currentSection === 'ABOUT' ? 'menu-item-active' : undefined
            }
            href='!#'
            onClick={e => onClick(renderAbout, e)}
          >
            ABOUT
          </a>
        </li>
        <li className='main-menu__item'>
          <a
            className={
              currentSection === 'SKILLS' ? 'menu-item-active' : undefined
            }
            href='!#'
            onClick={e => onClick(renderSkills, e)}
          >
            SKILLS
          </a>
        </li>
        <li className='main-menu__item'>
          <a
            className={
              currentSection === 'PROJECTS' ? 'menu-item-active' : undefined
            }
            href='!#'
            onClick={e => onClick(renderProjects, e)}
          >
            PROJECTS
          </a>
        </li>
        <li className='main-menu__item'>
          <a
            className={
              currentSection === 'CONTACT' ? 'menu-item-active' : undefined
            }
            href='!#'
            onClick={e => onClick(renderContact, e)}
          >
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
