import { RouterProvider } from "react-router-dom"
import "./styles/globales.scss"
import { router } from './routes/MainRoute'


function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App
