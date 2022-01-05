import Title from './Title';
import Project from './Project';
import Link from 'next/link';

const Projects = ({ projects, title, showLink, featured }) => {
  return (
    <section className='section projects'>
      <Title title={title} />
      <div className='section-center projects-center'>
        {projects.map((project) => {
          if (featured) {
            if (project.attributes.featured === true)
              return <Project key={project.id} {...project.attributes} />;
          } else {
            return <Project key={project.id} {...project.attributes} />;
          }
        })}
      </div>
      {showLink && (
        <Link href='/projects'>
          <a className='btn center-btn'>Projects</a>
        </Link>
      )}
    </section>
  );
};

export default Projects;
