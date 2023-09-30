import React from 'react'
import ReactDOM from 'react-dom'
import LandingPages from './pages/LandingPages'
import Account from './pages/Account'
import FormLogin from './pages/Login'
import FormRegister from './pages/Register'
import CreateProduct from './pages/CreateProduct'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <FormLogin />
  },
  {
    path: "/Register",
    element: <FormRegister />
  },
  {
    path: "/LandingPages",
    element: <LandingPages />
  },
  {
    path: "/CreateProduct",
    element: <CreateProduct/>
  },
  {
    path: "/Account",
    element: <Account />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
