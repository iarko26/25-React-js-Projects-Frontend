
import './App.css'
import React from 'react'
import UseThemeContext from './contexts/UseThemeContext'
import { useContext } from 'react'
import { useEffect } from 'react';
import UseThemeContextProvider from './contexts/UseThemeContextProvider';
import ThemeSwitcher from './component/ThemeSwitcher';

function App() {
  const {thememode}=useContext(UseThemeContext);
  useEffect(()=>{
    document.body.className=thememode
  },[thememode])





  return (
  <div className={`App ${thememode}`}>
  <h1>Theme Switcher</h1>
  <h2>
    Current Theme: {thememode}
  </h2>

    <ThemeSwitcher/>
  </div>
  )
}

export default App
