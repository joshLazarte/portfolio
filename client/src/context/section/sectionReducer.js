import {
  RENDER_ABOUT_SECTION,
  RENDER_SKILLS_SECTION,
  RENDER_PROJECTS_SECTION,
  RENDER_CONTACT_SECTION
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case RENDER_ABOUT_SECTION:
    case RENDER_SKILLS_SECTION:
    case RENDER_PROJECTS_SECTION:
    case RENDER_CONTACT_SECTION:
      return {
        ...state,
        currentSection: action.payload
      };
    default:
      return state;
  }
};
