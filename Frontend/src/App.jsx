import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import User from './Components/getUser/User.jsx'
import AddUser from './Components/addUser/AddUser.jsx'
import EditUser from './Components/updateUser/EditUser.jsx'
function App() {
  const route  = createBrowserRouter([
    {
      path:"/",
      element: <User/>
    },
       {
      path:"/add",
      element:<AddUser/>
    },
       {
      path:"/edit/:id",
      element:<EditUser/>
    },
    
  ])

  return (
    <>
     <RouterProvider router={route}>
 
     </RouterProvider>
    </>
  )
}

export default App
