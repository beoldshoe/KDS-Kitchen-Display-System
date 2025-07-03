import React from 'react';
import SideNavigation from '../components/SideNavigation';
import CookingTopNavigation from '../components/CookingTopNavigation';
import '../styles/PageLayout.css';

const PageLayout = ({ children }) => {
  return (
    <div className="page-layout-root">
      <div className="page-layout-side">
        <SideNavigation />
      </div>
      <div className="page-layout-main">
        <div className="page-layout-topnav">
          <CookingTopNavigation />
        </div>
        <div className="page-layout-content">{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
