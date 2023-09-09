import React, { useEffect } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './router/route'
import { useAppDispatch } from './redux/hook'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebase'
import { setUser } from './redux/user/userSlice'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email))
      }
    })
  }, [dispatch])

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
