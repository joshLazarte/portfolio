import React from 'react';

const projects = [
  {
    _id: 1,
    title: 'Tower Tracker',
    href: '/tower-tracker',
    img: '/images/projects/tower-tracker.PNG',
    alt: 'Cell Tower Tracker',
    description:
      'Enterprise application for maintaining and locating cell towers'
  },
  {
    _id: 2,
    title: 'MERN Calendar',
    href: '/calendar-app',
    img: '/images/projects/calendar.PNG',
    alt: 'Calendar of events',
    githubLink: 'https://github.com/joshLazarte/calendar_app',
    description: 'Create, manage, and share events. Built with the MERN stack.'
  },
  {
    _id: 3,
    title: 'Budget App',
    href: '/budget-app',
    img: '/images/projects/budget-capture.PNG',
    alt: 'Budget dashboard',
    githubLink: 'https://github.com/joshLazarte/budget-tool',
    description: 'Simple budget tool built with vanilla javascript and Chart.js'
  },
  {
    _id: 4,
    title: 'Community of Faith',
    href: 'https://wearecommunityoffaith.org',
    img: '/images/projects/cof.PNG',
    alt: 'Community of Faith church website',
    description: 'Local church website 100% custom designed and hand coded'
  }
];

const Projects = () => {
  return (
    <section className='projects'>
      <h2 className='projects__title'>Projects</h2>
      <div className='line' />
      {projects.map(project => (
        <div className='project' key={project._id}>
          <a href={project.href}>
            <img
              src={project.img}
              alt={project.alt}
              className='project__screenshot'
            />
          </a>
          <a href={project.href} className='project__title'>
            <h3>{project.title}</h3>
          </a>
          {project.githubLink && (
            <div className='u-text-center'>
              <a
                className='project__github'
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span className='icon brands fa-github' /> View Code
              </a>
            </div>
          )}
          <p className='project__description'>{project.description}</p>
          <div className='line' />
        </div>
      ))}
    </section>
  );
};

export default Projects;
