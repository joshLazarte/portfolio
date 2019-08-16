import React, { useReducer } from 'react';
import SectionContext from './sectionContext';
import sectionReducer from './sectionReducer';
import {
  RENDER_ABOUT_SECTION,
  RENDER_SKILLS_SECTION,
  RENDER_PROJECTS_SECTION,
  RENDER_CONTACT_SECTION
} from '../types';

const SectionState = props => {
  const initialState = {
    currentSection: 'ABOUT'
  };

  const [state, dispatch] = useReducer(sectionReducer, initialState);

  const renderAbout = () => {
    dispatch({ type: RENDER_ABOUT_SECTION, payload: 'ABOUT' });
  };

  const renderSkills = () => {
    dispatch({ type: RENDER_SKILLS_SECTION, payload: 'SKILLS' });
  };

  const renderProjects = () => {
    dispatch({ type: RENDER_PROJECTS_SECTION, payload: 'PROJECTS' });
  };

  const renderContact = () => {
    dispatch({ type: RENDER_CONTACT_SECTION, payload: 'CONTACT' });
  };

  return (
    <SectionContext.Provider
      value={{
        currentSection: state.currentSection,
        renderAbout,
        renderSkills,
        renderProjects,
        renderContact
      }}
    >
      {props.children}
    </SectionContext.Provider>
  );
};

export default SectionState;
