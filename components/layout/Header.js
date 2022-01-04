/* eslint-disable @next/next/no-img-element */
import { FaAlignRight } from 'react-icons/fa';
import Link from 'next/link';
import PageLinks from '../constants/PageLinks';

import Image from 'next/image';
const Header = ({ toggleSidebar }) => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link href='/'>
            <a>
              <Image src='/logo.svg' alt='logo' height={43} width={157} />
            </a>
          </Link>
          <button type='button' className='toggle-btn' onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass='nav-links'></PageLinks>
      </div>
    </nav>
  );
};

export default Header;
