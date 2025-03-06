import { Outlet } from "react-router-dom"
import MainLayout from "./layouts/MainLayout.jsx"
import Lenis from 'lenis'
import { useEffect } from "react"

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.05,
      syncTouch: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (

    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}


export default App
