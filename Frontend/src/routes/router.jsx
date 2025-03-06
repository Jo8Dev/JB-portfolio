import { createBrowserRouter } from "react-router-dom"
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
                { path: "project", element: <Project /> },
                { path: "contact", element: <Contact /> }
            ],
        },

    ])
}

const router = createRoutes()
export default router
