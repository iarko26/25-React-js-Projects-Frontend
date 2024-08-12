import React from 'react'
import UseThemeContext from '../contexts/UseThemeContext'
import { useContext } from 'react'
function ThemeSwitcher() {
    const {changeTheme}=useContext(UseThemeContext);

  return (
    <div>
    <button onClick={changeTheme} >
     Change Theme  
     
    </button>
      
    </div>
  )
}

export default ThemeSwitcher
