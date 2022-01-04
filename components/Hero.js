import { Link } from 'react-scroll';
import SocialLinks from './constants/social_links';
const Hero = () => {
  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <div>
            <div className='underline'></div>
            <h1>I'm Joe</h1>
            <h4>web and mobile dev</h4>
            <Link to='contact' smooth={true} duration={1000}>
              <a className='btn'>Contact Me</a>
            </Link>
            <SocialLinks />
          </div>
        </article>
        <img src='/hero.svg' alt='hero' className='hero-img-svg' />
      </div>
    </header>
  );
};

export default Hero;
