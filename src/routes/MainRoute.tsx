import { createBrowserRouter } from 'react-router-dom';
import ViewPage from '../pages/ViewPage'
import ErrorPage from '../pages/ErrorPage'
import AdminPage from '../pages/AdminPage'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <ViewPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'admin',
                element: <AdminPage />,
            },
            {
                path: 'projects/:eId',
                element: <AdminPage />,
            },
        ]
    },

])
