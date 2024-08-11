import React from 'react';
import { FaHome, FaBookOpen, FaVideo, FaChalkboardTeacher, FaQuestionCircle, FaClipboardCheck, FaCreditCard, FaEnvelope } from 'react-icons/fa';
import './SidePanel.css';

const Sidepanel = ({ activeView, onViewChange }) => {
  return (
    <aside className="sidepanel">
      <ul>
        {[
          { key: 'home', icon: <FaHome />, text: 'Home' },
          { key: 'storybook', icon: <FaBookOpen />, text: 'Storybook' },
          { key: 'videos', icon: <FaVideo />, text: 'Videos' },
          { key: 'online-classes', icon: <FaChalkboardTeacher />, text: 'Online Classes' },
          { key: 'sis', icon: <FaQuestionCircle />, text: 'Educative Quiz' },
          { key: 'assessment', icon: <FaClipboardCheck />, text: 'Assessment' },
          { key: 'resource-library', icon: <FaCreditCard />, text: 'Payment' },
          { key: 'communication-tools', icon: <FaEnvelope />, text: 'Contact Us' },
        ].map(({ key, icon, text }) => (
          <li key={key} className={activeView === key ? 'active' : ''}>
            <button
              className={`sidepanel-link ${activeView === key ? 'active' : ''}`}
              onClick={() => onViewChange(key)}
            >
              <div className="sidepanel-icon">
                {icon}
              </div>
              <span className="sidepanel-text">{text}</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidepanel;
