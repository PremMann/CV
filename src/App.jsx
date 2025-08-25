import React, { useState } from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { name: 'Home', icon: faHome, path: '/home' },
  { name: 'About', icon: faUser, path: '/about' },
  { name: 'Portfolio', icon: faBriefcase, path: '/portfolio' },
  { name: 'Contact', icon: faEnvelope, path: '/contact' },
];

const App = () => {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle('dark');
  };

  return (
    <>
        <button
          aria-label="Toggle dark mode"
          onClick={darkModeHandler}
          className="fixed top-6 right-8 z-50 bg-white/80 dark:bg-slate-800/80 rounded-full p-3 shadow-lg transition-colors aspect-square w-12 h-12 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={dark ? faSun : faMoon} className="text-xl text-[#e65101] dark:text-yellow-300" />
        </button>

        {/* Floating Navigation Bar */}
      <nav
        className="fixed left-1/2 -translate-x-1/2 top-6 z-40 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-full shadow-xl px-6 py-2 flex gap-2 md:gap-6 items-center
        border border-slate-200 dark:border-slate-700
        max-md:bottom-4 max-md:top-auto max-md:left-1/2 max-md:-translate-x-1/2 max-md:w-[95vw] max-md:justify-between max-md:px-2"
        aria-label="Main navigation"
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path === '/home' && location.pathname === '/');
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-[#e65101]
                ${isActive
                  ? 'bg-[#e65101] text-white shadow-md'
                  : 'text-slate-700 dark:text-[#FAE3B4] hover:bg-[#e65101]/80 hover:text-white'
                }`}
              aria-current={isActive ? 'page' : undefined}
            >
              <FontAwesomeIcon icon={item.icon} />
              <span className="hidden md:inline">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Main Content */}
      <div className="pt-24 pb-8 bg-[#f2f2f0] dark:bg-slate-800 min-h-screen transition-colors">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About dark={dark} />} />
          <Route path="/work" element={<Work />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
};

export default App;