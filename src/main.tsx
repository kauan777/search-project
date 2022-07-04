import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SearchContextProvider } from './contexts/ContextSearch'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>
)
