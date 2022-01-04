import Links from 'next/link';

const data = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about/',
  },
  {
    id: 3,
    text: 'projects',
    url: '/projects/',
  },
  {
    id: 5,
    text: 'contact',
    url: 'contact',
  },
];

const PageLinks = ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ''}`}>
      {data &&
        data.map((link) => {
          return (
            <li key={link.id}>
              {link.id === 5 ? (
                <Links href='/#contact'>contact</Links>
              ) : (
                <Links href={link.url}>
                  <a>{link.text}</a>
                </Links>
              )}
            </li>
          );
        })}
    </ul>
  );
};

export default PageLinks;
