import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from "./pages/Projects.jsx"
import './styles/index.css'
import './styles/buttons.scss'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import En from "./i18n/en.json"
import Es from "./i18n/es.json"
import Pt from "./i18n/pt.json"
import Ar from "./i18n/ar.json"

i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: En,
    },
    es: {
      translation: Es,
    },
    pt: {
      translation: Pt,
    },
    ar: {
      translation: Ar,
    },
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
