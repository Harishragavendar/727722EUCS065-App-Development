import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Dashboard.css'; // Ensure your CSS file is correct
import Navbar from './Navbar';
import Home from './Home';
import Assessment from './Assessment copy';
import Settings from './Settings';
import Flippy from './Flipbooks/Flippy';
import Animation from './Animations';
import Payment from './Payments';
import Sidepanel from './SidePanel';
import Contact from './Contact';
import QuizContainer from './Quiz/QuizContainer';
import EducationalContent from './EducationalContent';
import OnlineClasses from './OnlineClasses';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('home');
  const [collapsed, setCollapsed] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const contentComponents = {
    home: <Home />,
    'educational-content': <EducationalContent />,
    videos: <Animation />,
    'online-classes': <OnlineClasses />,
    sis: <QuizContainer />,
    'communication-tools': <Contact />,
    assessment: <Assessment />,
    'resource-library': <Payment />,
    settings: <Settings />,
    storybook: <Flippy />,
  };

  const renderContent = () => contentComponents[activeView] || <div className="content-panel">Select a section</div>;

  return (
    <div className="dashboard">
      <Navbar handleLogout={handleLogout} />
      <Sidepanel activeView={activeView} onViewChange={setActiveView} />
      <main className="content">
        <CSSTransition
          in={true}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          {renderContent()}
        </CSSTransition>
      </main>
    </div>
  );
};

export default Dashboard;
