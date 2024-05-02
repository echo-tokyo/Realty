import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/Router.jsx'
import './assets/reset.css'
import './assets/global.css'
import {Provider} from 'react-redux'
import {store} from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)
