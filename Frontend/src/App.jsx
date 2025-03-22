import { Outlet } from "react-router-dom"
import MainLayout from "./layouts/MainLayout.jsx"

function App() {
  return (

    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}


export default App
