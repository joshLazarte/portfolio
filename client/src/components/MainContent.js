import React, { useContext } from 'react';
import SectionContext from '../context/section/sectionContext';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const MainContent = () => {
  const sectionContext = useContext(SectionContext);
  const { currentSection, loading, message, messageType } = sectionContext;
  const props = { loading, message, messageType };

  let content;

  switch (currentSection) {
    case 'SKILLS':
      content = <Skills />;
      break;
    case 'PROJECTS':
      content = <Projects />;
      break;
    case 'CONTACT':
      content = <Contact {...props} />;
      break;
    default:
      content = <About />;
  }

  return <div className='main-display'>{content}</div>;
};

export default MainContent;
