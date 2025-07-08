import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add error handling for debugging
window.addEventListener('error', (e) => {
  console.error('Global error:', e.error)
})

const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Error: Root element not found</div>'
} else {
  try {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  } catch (error) {
    console.error('React render error:', error)
    rootElement.innerHTML = '<div style="color: red; padding: 20px;">Error rendering React app: ' + error + '</div>'
  }
}
