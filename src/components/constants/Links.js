import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';

const Links = ({ styleClass }) => {
  const data = [
    {
      id: 1,
      text: 'home',
      url: '/',
    },
    {
      id: 2,
      text: 'about',
      url: '/about#about',
    },
    {
      id: 3,
      text: 'projects',
      url: '/projects/',
    },
    {
      id: 4,
      text: 'contact me',
      url: '/contact/',
    },
  ];

  return (
    <>
      <ul className={styleClass}>
        {data.map((link) => {
          return (
            <li key={link.id}>
              <AnchorLink to={link.url} stripHash>
                {link.text}
              </AnchorLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Links;
