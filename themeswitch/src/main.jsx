import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseThemeContextProvider from './contexts/UseThemeContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <UseThemeContextProvider>
    <App />
  </UseThemeContextProvider>,
)
