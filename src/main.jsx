import './index.css'

import App from './App.jsx'
import { AppProvider } from './redux/store.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
      <App />
    </AppProvider>
)
