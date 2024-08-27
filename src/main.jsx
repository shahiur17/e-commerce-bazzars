import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreateRouter from './Routers/myCreateRouter'
import AuthProvider from './providers/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={myCreateRouter}></RouterProvider>
  </AuthProvider>
  </StrictMode>,
)
