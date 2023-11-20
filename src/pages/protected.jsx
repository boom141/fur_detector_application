import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Protected_page = () => {
    const authorized = localStorage.getItem('access_token');
  return (
    <>
        {authorized ? <Outlet/> : <Navigate to='/signin'/>}
    </>
  )
}

export default Protected_page