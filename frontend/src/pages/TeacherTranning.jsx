import React from 'react'
import { Outlet } from 'react-router-dom';

const TeacherTranning = () => {
  return (
    <>
<div>
      <h1>Teacher Training</h1>
      {/* This renders the nested routes */}
      <Outlet /> 
    </div>    </>
  )
}

export default TeacherTranning