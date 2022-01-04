/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';

const Project = ({ title, description, github, stack, url, image }) => {
  const img = image.data.attributes.formats.medium.url;

  return (
    <article className='project'>
      <div className='project-img' style={{ position: 'relative' }}>
        <Image src={img} alt={title} layout='fill' objectFit='contain' />
      </div>

      <div className='project-info'>
        <h3>{title}</h3>
        <p className='project-desc'>{description}</p>
        <div className='project-stack'>
          {stack.map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
        <div className='project-links'>
          <Link href={github}>
            <a className='tooltip'>
              <FaGithubSquare className='project-icon' />
              <span className='tooltiptext'>GitHub Link</span>
            </a>
          </Link>
          <Link href={url}>
            <a className='tooltip'>
              <FaShareSquare className='project-icon' />
              <span className='tooltiptext'>Live Demo</span>
            </a>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
