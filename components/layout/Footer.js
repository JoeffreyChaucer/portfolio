import SocialLinks from '../constants/social_links';

const Footer = () => {
  return (
    <footer className='footer'>
      <SocialLinks styleClass='footer-links' />
      <h4>
        copyright&copy;{new Date().getFullYear()}
        <span>WebDev</span> all rights reserved
      </h4>
    </footer>
  );
};

export default Footer;
