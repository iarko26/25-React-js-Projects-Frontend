import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  menus from  './data'
import Menu from './Menu'
function App() {
  

  return (
    <div>
      <Menu menus={menus} />
    </div>
  )
}

export default App
