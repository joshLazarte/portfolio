import React, { useContext } from 'react';
import SectionContext from '../../../context/section/sectionContext';

const MainMenu = () => {
  const sectionContext = useContext(SectionContext);
  const {
    renderAbout,
    renderSkills,
    renderProjects,
    renderContact
  } = sectionContext;
  return (
    <div className='menu-container'>
      <ul className='main-menu'>
        <li className='main-menu__item'>
          <a href='!#' onClick={renderAbout}>
            ABOUT
          </a>
        </li>
        <li className='main-menu__item'>
          <a href='!#' onClick={renderSkills}>
            SKILLS
          </a>
        </li>
        <li className='main-menu__item'>
          <a href='!#' onClick={renderProjects}>
            PROJECTS
          </a>
        </li>
        <li className='main-menu__item'>
          <a href='!#' onClick={renderContact}>
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
