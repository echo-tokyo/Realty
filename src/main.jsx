import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router.jsx'
import './assets/reset.css'
import './assets/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
