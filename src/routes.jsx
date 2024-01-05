import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path : "/",
        element : <h1>Home page</h1>
    },
    {
        path : "/about",
        element : <h2>About page</h2>
    }
])

export default router;