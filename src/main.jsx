import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import Home from './Components/Home/Home';
import ToyInput from './Components/Items/ToyInput';
import AllToys from './Components/Items/AllToys';
import MyToys from './Components/Items/MyToys';
import Details from './Components/Items/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/add',
        element: <ToyInput></ToyInput>
      },
      {
        path: '/toys',
        element: <AllToys></AllToys>
      },
      {
        path: '/myToys',
        element: <MyToys></MyToys>
      },
      {
        path: '/details/:id',
        element: <Details></Details>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
