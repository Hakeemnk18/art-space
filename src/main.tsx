import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import allRoutes from './route/Index.tsx'

const appRouter = createBrowserRouter(allRoutes)
const root = createRoot(document.getElementById('root')!)


root.render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
)
