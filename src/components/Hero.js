import React from 'react';
import Button from './Button';

import SocialLinks from './constants/SocialLinks';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='hero-grid'>
          <article className='hero-text'>
            <div className='underline'></div>
            <h1>I'm Joe MAMA</h1>
            <h4>Freelance Full Stack Developer</h4>
            <Button>contact me</Button>
            <SocialLinks />
          </article>
          <div className='hero-image'></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
