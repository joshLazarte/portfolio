import React from 'react';

const Skills = () => {
  return (
    <section className='skills'>
      <h2 className='skills__title'>
        Primary <span>Skillset</span>
      </h2>
      <div className='line' />
      <h3 className='skills__heading'>
        <span className='icon solid fa-code' /> Front End
      </h3>
      <div className='line2' />
      <ul className='skills__list'>
        <li className='skills__list-item'>
          Responsive design with <strong>HTML5</strong>, <strong>CSS3</strong>,
          and <strong>Javascript</strong>
        </li>
        <li className='skills__list-item'>
          Advanced CSS with <strong>SASS</strong>
        </li>
        <li className='skills__list-item'>
          Integration of multiple public and private <strong>API's</strong>
        </li>
        <li className='skills__list-item'>
          <strong>React</strong> and <strong>Redux</strong>
        </li>
        <li className='skills__list-item'>
          Modern JS development with <strong>Webpack</strong> and{' '}
          <strong>Babel</strong>
        </li>
      </ul>

      <h3 className='skills__heading'>
        <span className='icon solid fa-server' /> Back End
      </h3>
      <div className='line2' />
      <ul className='skills__list'>
        <li className='skills__list-item'>
          Server-side applications built on <strong>Node</strong> and{' '}
          <strong>Express</strong>
        </li>
        <li className='skills__list-item'>
          Creation of custom back-end <strong>API's</strong>
        </li>
        <li className='skills__list-item'>
          Data persistence with <strong>MongoDB</strong> and{' '}
          <strong>Mongoose</strong>
        </li>
        <li className='skills__list-item'>
          Utilization of various <strong>NPM</strong> packages including:{' '}
          <strong>Stripe</strong>, <strong>Nodemailer</strong> and{' '}
          <strong>Passport</strong>
        </li>
      </ul>

      <h3 className='skills__heading'>
        <span className='icon solid fa-code-branch' /> Dev Ops
      </h3>
      <div className='line2' />
      <ul className='skills__list'>
        <li className='skills__list-item'>
          Version control with <strong>Git</strong>
        </li>
        <li className='skills__list-item'>
          Multiple deployments to <strong>Digital Ocean</strong> and{' '}
          <strong>Heroku</strong>
        </li>
        <li className='skills__list-item'>
          Implementation of <strong>SSL</strong> certificates with{' '}
          <strong>Let's Encrypt</strong>
        </li>
        <li className='skills__list-item'>
          <strong>NGINX</strong> reverse proxy configuration
        </li>
        <li className='skills__list-item'>
          <strong>UFW</strong> IP access configuration and <strong>SSH</strong> key
          access
        </li>
      </ul>
    </section>
  );
};

export default Skills;
