import React, { useContext } from 'react';
import SectionContext from '../../../context/section/sectionContext';

const MainMenu = () => {
  const sectionContext = useContext(SectionContext);
  const {
    currentSection,
    renderAbout,
    renderSkills,
    renderProjects,
    renderContact
  } = sectionContext;
  return (
    <div className='menu-container'>
      <ul className='main-menu'>
        <li className={'main-menu__item'}>
          <a className={currentSection === 'ABOUT' ? 'menu-item-active' : undefined} href='!#' onClick={renderAbout}>
            ABOUT
          </a>
        </li>
        <li className='main-menu__item'>
          <a className={currentSection === 'SKILLS' ? 'menu-item-active' : undefined} href='!#' onClick={renderSkills}>
            SKILLS
          </a>
        </li>
        <li className='main-menu__item'>
          <a className={currentSection === 'PROJECTS' ? 'menu-item-active' : undefined} href='!#' onClick={renderProjects}>
            PROJECTS
          </a>
        </li>
        <li className='main-menu__item'>
          <a className={currentSection === 'CONTACT' ? 'menu-item-active' : undefined} href='!#' onClick={renderContact}>
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
