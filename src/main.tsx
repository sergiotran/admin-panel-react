import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/app'
import { BrowserRouter } from 'react-router-dom'
import '@/common/styles/global.scss'
import { HelmetProvider } from 'react-helmet-async'

// Tailwind
import '@/assets/styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
