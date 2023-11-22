import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Protected_page = () => {
  const authorized = JSON.parse(localStorage.getItem('authorized'));
  return (
    <>
        {authorized ? <Outlet/> : <Navigate to='/signin'/>}
    </>
  )
}

export default Protected_page