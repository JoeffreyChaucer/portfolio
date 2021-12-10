import Link from 'next/link';
import SocialLinks from './constants/social_links';
const Hero = () => {
  return (
    <header className='hero'>
      <div className='section-center hero-center'>
        <article className='hero-info'>
          <div>
            <div className='underline'></div>
            <h1>I'm Joe</h1>
            <h4>freelance web and mobile dev</h4>
            <Link href='/contact'>
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
