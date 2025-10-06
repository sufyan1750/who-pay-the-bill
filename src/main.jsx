import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyProvider } from './context/MyProvider.jsx'

createRoot(document.getElementById('root')).render(
  <MyProvider>
    <App />
  </MyProvider>
)
