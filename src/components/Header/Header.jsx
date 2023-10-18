import {React, useState, useEffect} from 'react';
import {useLocalStorage }from '../../hooks/useLocalStorage'
import {FaSun, FaMoon} from 'react-icons/fa6';
import './Header.css';

function Header() {

  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    console.log(theme);
  }, [theme])

  /** const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  }); **/

  function switchTheme() {
    setTheme(currentTheme => currentTheme === "light" ? "dark" : "light");
  }

  return (
    <header className="header">
      <h1>Task manager</h1>
      <div className="theme-switch" onClick={switchTheme}>
        {theme === "light" ? <FaSun></FaSun> : <FaMoon></FaMoon>}
      </div>
    </header>
  )
}

export default Header