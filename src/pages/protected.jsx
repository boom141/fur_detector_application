import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Protected_page = () => {
    const account_aunthenticated = false;

  return (
    <div>
        {account_aunthenticated ? <Outlet/> : <Navigate to='/signin'/>}
    </div>
  )
}

export default Protected_page