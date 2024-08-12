import React from 'react'
import UseThemeContext from './UseThemeContext'
import { useState } from 'react'
function UseThemeContextProvider({children}) {
    const [thememode,setthememode]=useState("light");
    const changeTheme=()=>{
        setthememode((prevmode)=>prevmode==="light"?("dark"):("light"));

    } 
  return (
<UseThemeContext.Provider value={{thememode,changeTheme}}>
        {children}
</UseThemeContext.Provider>
  )
}

export default UseThemeContextProvider
