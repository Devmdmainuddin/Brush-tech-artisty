import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx'
import AuthProvider from './providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import ArtAndCraft from './pages/ArtAndCraft.jsx';
import AddCraft from './pages/AddCraft.jsx';
import MyArtCraft from './pages/MyArtCraft.jsx';
import UpdateCraft from './pages/UpdateCraft.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx'
import CraftDetails from './pages/CraftDetails.jsx';
import Categorey from './components/Categorey.jsx';
import Contact from './pages/Contact.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        
      },
      {
        path: "/artandcraft",
        element: <ArtAndCraft />,
        loader: () => fetch('https://brush-tech-artisty-server.vercel.app/artAndCraf/')
      },
      {
        path: "/artAndCraf/:category",
        element: <Categorey></Categorey>,
        loader: ({ params }) => fetch(`https://brush-tech-artisty-server.vercel.app/artAndCraf/${params.category}`)
        
        
      },
      {
        path: "/addcraft",
        element:<PrivateRoute><AddCraft /></PrivateRoute> ,
      },
      {
        path: "/updatecraft/:id",
        element:<PrivateRoute><UpdateCraft /></PrivateRoute> ,
        loader: ({ params }) => fetch(`https://brush-tech-artisty-server.vercel.app/artAndCraf/${params.id}`)
      },
      {
        path: '/CraftDetails/:id',
        element: <PrivateRoute><CraftDetails></CraftDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://brush-tech-artisty-server.vercel.app/artAndCraf/${params.id}`)
      },

      {
        path: "/myartcraft",
        element: <PrivateRoute><MyArtCraft /></PrivateRoute>,
     
      },
      {
        path: "/contact",
        element: <Contact />,
     
      },
    
      
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
        loader: () => fetch('https://brush-tech-artisty-server.vercel.app/users')
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
