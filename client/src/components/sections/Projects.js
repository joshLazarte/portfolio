import React from 'react';
import projects from '../../assets/projects/projects.json';

const Projects = () => {
  return (
    <section className='projects'>
      <h2 className='projects__title'>Projects</h2>
      <div className='line' />
      {projects.map(project => (
        <div className='project' key={project._id}>
          <a href={project.href} target='_blank' rel='noopener noreferrer'>
            <img
              src={project.img}
              alt={project.alt}
              className='project__screenshot'
            />
          </a>
          <a
            href={project.href}
            className='project__title'
            target='_blank'
            rel='noopener noreferrer'
          >
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
