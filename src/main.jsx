import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './Pages/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import AuthProvider from './AuthContext/AuthProvider.jsx';

const router = createBrowserRouter([
  {path: "/", Component: Home, children: [
    {
      index: true, Component: App
    },
    {
      path: "/addcoffee",
      Component: AddCoffee
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
