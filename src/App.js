import React from 'react'
import Form from './Components/Form/Form'
import AboutUs from './Components/AboutUs/AboutUs'
import NavigationBar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import AllUsers from './Components/AllUsers/AllUsers'

function App() {
  return (
    <div className='bg-gradient-to-r from-gray-900 via-gray-600 to-gray-800'>
      <NavigationBar/>
      <Routes>
      <Route path='/' element={<Form/>} />
      <Route path='/home' element={<Form/>} />
      <Route path='/aboutUs' element={<AboutUs/>} />
      <Route path='/allUsers' element={<AllUsers/>} />
      </Routes>
    </div>
  )
}

export default App