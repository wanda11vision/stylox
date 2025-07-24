import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Userid from './pages/Userid'

function App() {
 let a=createBrowserRouter([

  {
    path:'/',
    element:<Home/>
  },
   
  {
    path:'/blog',
    element:<Blog/>
  },
  {
    path:'/user',
    element:<Userid/>
  }
 
 ])

  return (
    <div>
      <RouterProvider router={a}/>
    </div>
  )
}

export default App
