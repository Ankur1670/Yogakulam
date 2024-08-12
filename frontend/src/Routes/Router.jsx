import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Class from '../pages/Class';
import TeacherTranning from '../pages/TeacherTranning';
import Schedule from '../pages/Schedule';
import Contactus from '../pages/Contactus';
import SereneSoul from '../pages/SereneSoul'; // Import SereneSoul component
import Teachers from '../pages/Teachers'; // Import Teachers component
import { Routes, Route } from 'react-router-dom';
import Yttc200Hour from '../pages/Yttc200Hour';
import Yttc300Hour from '../pages/Yttc300Hour';
import Yttc500Hour from '../pages/Yttc500Hour';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import EnrollForm from '../pages/EnrollForm';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/serene-soul' element={<SereneSoul />} /> {/* SereneSoul Route */}
      <Route path='/teachers' element={<Teachers />} /> {/* Teachers Route */}
      <Route path='/class' element={<Class />} />
      <Route path='/tt' element={<TeacherTranning />} />
      <Route path='/200-hour' element={<Yttc200Hour/>}/>
      <Route path='/300-hour' element={<Yttc300Hour/>}/>

      <Route path='/500-hour' element={<Yttc500Hour/>}/>

      <Route path='/schedule' element={<Schedule />} />
      <Route path='/contactus' element={<Contactus />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path="/enroll" element={<EnrollForm />} />

    </Routes>
  );
};

export default Router;
