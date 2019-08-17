import React, { useReducer } from 'react';
import SectionContext from './sectionContext';
import sectionReducer from './sectionReducer';
import {
  RENDER_ABOUT_SECTION,
  RENDER_SKILLS_SECTION,
  RENDER_PROJECTS_SECTION,
  RENDER_CONTACT_SECTION,
  TOGGLE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE
} from '../types';

const SectionState = props => {
  const initialState = {
    currentSection: 'ABOUT',
    loading: false,
    message: null,
    messageType: undefined
  };

  const [state, dispatch] = useReducer(sectionReducer, initialState);

  const renderAbout = e => {
    e && e.preventDefault();
    dispatch({ type: RENDER_ABOUT_SECTION, payload: 'ABOUT' });
  };

  const renderSkills = e => {
    e && e.preventDefault();
    dispatch({ type: RENDER_SKILLS_SECTION, payload: 'SKILLS' });
  };

  const renderProjects = e => {
    e && e.preventDefault();
    dispatch({ type: RENDER_PROJECTS_SECTION, payload: 'PROJECTS' });
  };

  const renderContact = e => {
    e && e.preventDefault();
    dispatch({ type: RENDER_CONTACT_SECTION, payload: 'CONTACT' });
  };

  const toggleLoading = e => {
    e && e.preventDefault();
    dispatch({ type: TOGGLE_LOADING });
  };

  const setMessage = msg => {
    dispatch({ type: SET_MESSAGE, payload: msg });

    setTimeout(() => dispatch({ type: CLEAR_MESSAGE }), 5000);
  };

  return (
    <SectionContext.Provider
      value={{
        currentSection: state.currentSection,
        loading: state.loading,
        message: state.message,
        messageType: state.messageType,
        renderAbout,
        renderSkills,
        renderProjects,
        renderContact,
        toggleLoading,
        setMessage
      }}
    >
      {props.children}
    </SectionContext.Provider>
  );
};

export default SectionState;
