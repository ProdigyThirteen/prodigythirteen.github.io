import React from 'react';

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="bg-white dark:bg-neutral-900 text-black dark:text-white p-4 shadow-md p-4 md:px-8 flex justify-between items-center">
      <div className="text-xl text-yellow-500 font-bold">William Monk</div>
      <nav className="hidden md:flex gap-6">
        <button 
          onClick={() => setCurrentPage('games')}
          className={`transition-colors ${
            currentPage === 'games' 
              ? 'text-yellow-500 font-bold' 
              : 'text-gray-700 dark:text-white hover:text-yellow-500'
          }`}
        >
          Games
        </button>
        <button 
          onClick={() => setCurrentPage('projects')}
          className={`transition-colors ${
            currentPage === 'projects' 
              ? 'text-yellow-500 font-bold' 
              : 'text-gray-700 dark:text-white hover:text-yellow-500'
          }`}
        >
          Personal Projects
        </button>
        <button 
          onClick={() => setCurrentPage('jams')}
          className={`transition-colors ${
            currentPage === 'jams' 
              ? 'text-yellow-500 font-bold' 
              : 'text-gray-700 dark:text-white hover:text-yellow-500'
          }`}
        >
          Game Jams
        </button>
        <button 
          onClick={() => setCurrentPage('about')}
          className={`transition-colors ${
            currentPage === 'about' 
              ? 'text-yellow-500 font-bold' 
              : 'text-gray-700 dark:text-white hover:text-yellow-500'
          }`}
        >
          About
        </button>
      </nav>
      <div className="md:hidden">
        <button>
          <span className="text-2xl">☰</span>
        </button>
      </div>
    </header>
  );
}