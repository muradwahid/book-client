import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './router/route'

function App() {

  return (
    <>
  <RouterProvider router={route} />
    </>
  )
}

export default App
