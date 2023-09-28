import React from 'react'
import ReactDOM from 'react-dom/client'
import Home_EN from './pages/Home_EN.jsx'
import Home_ES from './pages/Home_ES.jsx'
import Home_BR from './pages/Home_BR.jsx'
import Projects from "./pages/Projects.jsx"
import './styles/index.css'
import './styles/buttons.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home_EN />} />
        <Route path="/es" element={<Home_ES />} />
        <Route path="/br" element={<Home_BR />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
