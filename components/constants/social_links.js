import Link from 'next/link';
import {
  FaStackOverflow,
  FaLinkedin,
  FaGithub,
  FaBehanceSquare,
  FaTwitterSquare,
} from 'react-icons/fa';

const data = [
  {
    id: 1,
    icon: <FaStackOverflow className='social-icon'></FaStackOverflow>,
    url: 'https://meta.stackexchange.com/users/1122110/joeffrey-chaucer/',
  },
  {
    id: 2,
    icon: <FaLinkedin className='social-icon'></FaLinkedin>,
    url: 'https://www.linkedin.com/in/joeffreychaucer/W',
  },
  {
    id: 3,
    icon: <FaGithub className='social-icon'></FaGithub>,
    url: 'https://github.com/JoeffreyChaucer/',
  },
  {
    id: 4,
    icon: <FaBehanceSquare className='social-icon'></FaBehanceSquare>,
    url: 'https://www.behance.net/joeffreychaucer',
  },
];

const SocialLinks = () => {
  return (
    <div className='social-links'>
      {data.map((link) => {
        return (
          <Link href={link.url} key={link.id}>
            <a className='social-link'>{link.icon}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
