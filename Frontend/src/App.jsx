import { Outlet } from "react-router-dom"
import MainLayout from "./layouts/MainLayout.jsx"
import Lenis from 'lenis'
import { useEffect } from "react"

function App() {
  //Initialisation de Lenis pour les animations (smooth scroll)
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.2,
      syncTouch: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    // Stocker l'ID pour nettoyer correctement
    const frameId = requestAnimationFrame(raf)

    // Nettoyage propre lors du démontage
    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  return (

    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}


export default App
