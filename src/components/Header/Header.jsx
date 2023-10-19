import {React, useState, useEffect, useContext} from 'react';
import {FaSun, FaMoon} from 'react-icons/fa6';
import './Header.css';
import {ThemeContext} from '../../context/themeContext';

function Header() {

  const {theme, setTheme} = useContext(ThemeContext);

  /** const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  }); **/

  function switchTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <header className="header">
      <h1>Task manager</h1>
      <div className="theme-switch" onClick={switchTheme}>
        {theme === "light" ? <FaMoon></FaMoon> : <FaSun></FaSun>}
      </div>
    </header>
  )
}

export default Header