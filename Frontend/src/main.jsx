import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import router from "./routes/router"
import './assets/styles/_index.scss'
import { useState, useEffect } from 'react'

// Simple gestionnaire d'erreurs
function ErrorFallback() {
  return (
    <div style={{
      padding: "20px",
      textAlign: "center",
      color: "#800080"
    }}>
      Une erreur s'est produite. Veuillez recharger la page.
    </div>
  )
}

// Composant pour intercepter les erreurs
function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const handler = () => setHasError(true)
    window.addEventListener('error', handler)
    return () => window.removeEventListener('error', handler)
  }, [])

  if (hasError) return <ErrorFallback />
  return children
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
)

