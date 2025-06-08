// components/PageContent.jsx
import React from 'react';
import Games from '../pages/Games';
import PersonalProjects from '../pages/PersonalProjects';
import GameJams from '../pages/GameJams';
import About from '../pages/About';

const PageContent = ({ currentPage }) => {
  const renderPage = () => {
    switch (currentPage) {
      case 'games':
        return <Games />;

      case 'projects':
        return <PersonalProjects />;

      case 'jams':
        return <GameJams />;

      case 'about':
        return <About />;

      default:
        return <Games />;
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {renderPage()}
    </main>
  );
};

export default PageContent;