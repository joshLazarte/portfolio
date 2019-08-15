import React from 'react';

const About = () => {
  return (
    <section className='about'>
      <div alt='Coding Demo Gif' className='about__img' />
      <h1 className='about__name'>
        Josh <span>Lazarte</span>
      </h1>
      <div className='line' />
      <p className='about__text'>
        Self-taught, <strong>self-motivated</strong> developer with a
        <strong>passion</strong> for <strong>solving problems</strong> and
        <strong>creating value.</strong>
      </p>
      <div className='line' />
      <ul className='about__links'>
        <li className='about__links-item'>
          <a
            href='https://github.com/joshLazarte'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='icon brands fa-github' /> Github
          </a>
        </li>
        <li className='about__links-item'>
          <a
            href='https://www.linkedin.com/in/josh-lazarte/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='icon brands fa-linkedin' /> LinkedIn
          </a>
        </li>
        <li className='about__links-item'>
          <a href='/downloads/resume' download>
            <span className='icon solid fa-file' /> Resume
          </a>
        </li>
      </ul>
    </section>
  );
};

export default About;
