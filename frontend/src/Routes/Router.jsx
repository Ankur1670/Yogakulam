import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Class from '../pages/Class'
import TeacherTranning from '../pages/TeacherTranning'
import Schedule from '../pages/Schedule'
import Contactus from '../pages/Contactus'

import { Routes , Route } from 'react-router-dom'
const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/class' element={<Class/>}/>
        <Route path='/tt' element={<TeacherTranning/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/contactus' element={<Contactus/>}/>

 
    </Routes>
  )
}

export default Router