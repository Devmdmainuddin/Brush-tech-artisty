import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx'
import AuthProvider from './providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import ArtAndCraft from './pages/ArtAndCraft.jsx';
import AddCraft from './pages/AddCraft.jsx';
import MyArtCraft from './pages/MyArtCraft.jsx';
import UpdateCraft from './pages/UpdateCraft.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import CraftDetails from './pages/CraftDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/artandcraft",
        element: <ArtAndCraft />,
        loader: () => fetch('http://localhost:4000/artAndCraf/')
      },
      {
        path: "/addcraft",
        element: <AddCraft />,
      },
      {
        path: "/updatecraft/:id",
        element: <UpdateCraft />,
        loader: ({ params }) => fetch(`http://localhost:4000/artAndCraf/${params.id}`)
      },
      {
        path: '/craftDetails/:id',
        element: <CraftDetails></CraftDetails>,
        loader: ({ params }) => fetch(`http://localhost:4000/artAndCraf/${params.id}`)
      },

      {
        path: "/myartcraft",
        element: <MyArtCraft />,
     
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
        loader: () => fetch('http://localhost:4000/users')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>



  </React.StrictMode>,
)
