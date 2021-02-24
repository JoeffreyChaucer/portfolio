import React, { useState, useEffect } from 'react';
import Logo from '../images/logo.svg';
import { Link } from 'gatsby';
import Links from './constants/Links';
import { debounce } from './utilities/helper';

const Header = () => {
  const [isToggled, setToggled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
    setToggled(false);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible, handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 690) {
        setToggled(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='header'>
      <div
        className={`overlay ${isToggled ? 'show fade-in' : 'fade-out'}`}
      ></div>
      <nav className={`navbar ${visible ? '' : 'scroll'}`}>
        <div className='nav-grid'>
          <div className='logo'>
            <Link to='/'>
              <img src={Logo} alt='Logo' />
            </Link>
            <button
              type='button'
              onClick={handleToggle}
              className={`mobile__hamburger  ${isToggled ? 'animate' : ''}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <Links styleClass='nav-links' />

          <div />
        </div>
      </nav>
      <div className='mobile-menu'>
        <Links
          styleClass={` mobile-nav-links ${
            isToggled ? 'fade-in open' : 'fade-out'
          }`}
        />
      </div>
    </header>
  );
};

export default Header;
