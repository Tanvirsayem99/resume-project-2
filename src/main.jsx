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
import UpdateToy from './Components/Items/UpdateToy';
import SingleCategory from './Components/Home/SingleCategory';
import PrivateRoute from './Private/PrivateRoute';
import ErrorPage from './ErrorPage/ErrorPage';
import Blog from './Components/Items/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><ToyInput></ToyInput></PrivateRoute>
      },
      {
        path: '/toys',
        element: <AllToys></AllToys>
      },
      {
        path: '/myToys',
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader: ({params}) => fetch(`https://assignment-11-rho.vercel.app/update/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
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
