/* eslint-disable @next/next/no-img-element */
import { FaAlignRight } from 'react-icons/fa';
import Link from 'next/link';
import PageLinks from '../constants/links';
const Header = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link href='/'>
            <a>
              <img src='/logo.svg' alt='logo' />
            </a>
          </Link>
          <button type='button' className='toggle-btn'>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass='nav-links'></PageLinks>
      </div>
    </nav>
  );
};

export default Header;
