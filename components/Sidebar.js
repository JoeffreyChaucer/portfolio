import PageLinks from './constants/PageLinks';
import SocialLinks from './constants/social_links';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <button className='close-btn' onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className='side-container'>
        <PageLinks styleClass={` ${isOpen ? 'sidebar-links' : ''}`} />
        <SocialLinks styleClass={` ${isOpen ? 'sidebar-icons' : ''}`} />
      </div>
    </aside>
  );
};

export default Sidebar;
