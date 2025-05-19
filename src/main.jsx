import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './Pages/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import AuthProvider from './AuthContext/AuthProvider.jsx';
import AllCoffees from './components/AllCoffees.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import CoffeeDetails from './components/CoffeeDetails.jsx';
import FallbackEle from './components/FallbackEle.jsx';

const router = createBrowserRouter([
  {path: "/", Component: Home, children: [
    {
      index: true, Component: App
    },
    {
      path: "/addcoffee",
      Component: AddCoffee
    },
    {
      path: "/updatecoffee/:id",
      Component: UpdateCoffee,
      loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
      HydrateFallback: FallbackEle
    },
    {
      path: "/coffeedetails/:id",
      Component: CoffeeDetails,
      loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
      HydrateFallback: FallbackEle
    }
  ]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
