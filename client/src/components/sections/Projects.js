import React from 'react';
import calendar from '../../assets/images/calendar.JPG';

const Projects = () => {
  return (
    <section className='app-projects'>
      <h2 className='app-projects__title'>Projects</h2>
      <div className='line' />
      <div className='project'>
        <a href='/calendar-app'>
          <img
            src={calendar}
            alt='Calendar of events'
            className='project__screenshot'
          />
        </a>
        <a href='/calendar-app' className='project__title'>
          <h3>MERN Calendar</h3>
        </a>
        <div className='u-text-center'>
          <a
            className='project__github'
            href='https://github.com/joshLazarte/calendar_app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='icon brands fa-github' /> View Code
          </a>
        </div>
        <p className='project__description'>
          Create, manage, and share events. Built with the MERN stack.
        </p>
      </div>
      <div className='line' />
      <div className='project'>
        <a href='/calendar-app'>
          <img
            src={calendar}
            alt='Calendar of events'
            className='project__screenshot'
          />
        </a>
        <a href='/calendar-app' className='project__title'>
          <h3>MERN Calendar</h3>
        </a>
        <div className='u-text-center'>
          <a
            className='project__github'
            href='https://github.com/joshLazarte/calendar_app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='icon brands fa-github' /> View Code
          </a>
        </div>
        <p className='project__description'>
          Create, manage, and share events. Built with the MERN stack.
        </p>
      </div>
      <div className='line' />
      <div className='project'>
        <a href='/calendar-app'>
          <img
            src={calendar}
            alt='Calendar of events'
            className='project__screenshot'
          />
        </a>
        <a href='/calendar-app' className='project__title'>
          <h3>MERN Calendar</h3>
        </a>
        <div className='u-text-center'>
          <a
            className='project__github'
            href='https://github.com/joshLazarte/calendar_app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='icon brands fa-github' /> View Code
          </a>
        </div>
        <p className='project__description'>
          Create, manage, and share events. Built with the MERN stack.
        </p>
      </div>
    </section>
  );
};

export default Projects;
