import React, { useState } from 'react';
import darkmode from '../assets/logos/dark-mode.svg';
import lightmode from '../assets/logos/light-mode.svg';
import { motion } from 'framer-motion';

const Navbar = ({ theme, toggleMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 flex justify-between items-center p-6 ${
        theme === 'light' ? 'bg-gray-100 text-black' : 'bg-slate-800 text-white'
      }`}
    >
      {/* Branding */}
      <div className="flex items-center">
        <h1 className="text-xl lg:text-3xl font-bold sm:text-2xl">Saksham Agarwal</h1>
      </div>

      {/* Navigation Links */}
      <motion.ul
        initial={{ x:-100, scale: 0.95 }}
        animate={{ x: isMenuOpen ? 0 : -100, scale: isMenuOpen ? 1 : 0.95 }}
        transition={{ duration: 0.5 }}
        className={`${
          isMenuOpen
            ? 'absolute top-20 left-0 right-0 bg-gray-800 text-white flex flex-col gap-4 text-2xl p-4 md:static md:flex md:flex-row md:gap-4'
            : 'hidden'
        } md:flex md:flex-row md:gap-4`}
      >
        <li>
          <a href="#home" onClick={handleLinkClick}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>About</a>
        </li>
        <li>
          <a href="#skills" onClick={handleLinkClick}>Skills</a>
        </li>
        <li>
          <a href="#projects" onClick={handleLinkClick}>Projects</a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>Contact</a>
        </li>
      </motion.ul>

      {/* Theme Toggle & Hamburger Menu */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <img
          src={theme === 'light' ? lightmode : darkmode}
          alt="Toggle Mode"
          onClick={toggleMode}
          className="cursor-pointer ml-4 h-10 w-10"
        />
        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMenuOpen ? 'X' : '\u2630'} {/* Unicode for Hamburger Menu */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
