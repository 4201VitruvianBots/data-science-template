import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CatsNDogs from './CatsNDogs.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootMenu from './RootMenu.tsx'
import ReactDOM from 'react-dom'
import React from 'react'
import Root from './Root.tsx'


const router = createBrowserRouter([
  {
      path: '/',
      element: <Root />,
      children: [
          {
              index: true,
              element: <RootMenu />,
          },
          {
              path: 'admin',
              element: <App />,
          },
          {
              path: 'Gatos',
              element: <CatsNDogs />,
          },
         
      ],
  },
]);



// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
