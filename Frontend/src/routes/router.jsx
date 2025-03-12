import { createBrowserRouter, Navigate } from "react-router-dom"
import App from "../App"
import Home from "../pages/Home/Home"
import Project from "../pages/Project/Project"
import Contact from "../pages/Contact/Contact"

function createRoutes() {
    return createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                { path: "", element: <Home /> },
                { path: "project", element: <Navigate to="/project/0" replace /> }, // Redirection explicite vers le premier projet
                { path: "project/:id", element: <Project /> },
                { path: "contact", element: <Contact /> },
                { path: "*", element: <div>Page non trouvée</div> }
            ],
        },

    ])
}

const router = createRoutes()
export default router
