import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { appStore } from './utils/appStore.js'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)