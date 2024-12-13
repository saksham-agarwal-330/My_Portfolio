import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Technologies from './components/Technologies';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

  // Update the background color based on the theme
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? 'rgb(17, 24, 39)' : 'white';
  }, [theme]);

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
      <Navbar theme={theme} toggleMode={toggleMode} />
      <div
        className={`container overflow-hidden mx-auto px-12 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
          }`}
      >
        <Home theme={theme} />
        <About theme={theme} />
        <Technologies theme={theme} />
        <Project theme={theme} />
        <Contact theme={theme} />
      </div>
    </>
  );
}

export default App;
