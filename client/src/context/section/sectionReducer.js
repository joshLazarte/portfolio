import {
  RENDER_ABOUT_SECTION,
  RENDER_SKILLS_SECTION,
  RENDER_PROJECTS_SECTION,
  RENDER_CONTACT_SECTION,
  TOGGLE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE
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

    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload.msg,
        messageType: action.payload.type
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
        messageType: undefined
      };
    default:
      return state;
  }
};
