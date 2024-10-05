import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard.jsx'
import Trade from './components/Trade.jsx'
import Funds from './components/Funds.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Funds",
    element: <Funds />,
  }, {
    path: "/Trade",
    element: <Trade />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)



