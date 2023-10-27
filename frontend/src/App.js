import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks'
import { useContext, useEffect, useState } from 'react';
import './index.css';
import {ThemeContext} from './context/themeContext';

function App() {

  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    console.log(theme)
  }, []);

  return (
    <main id={theme}>
      <Header></Header>
      <div className="container">
        <Tasks></Tasks>
      </div>
    </main>
  );
}

export default App;
