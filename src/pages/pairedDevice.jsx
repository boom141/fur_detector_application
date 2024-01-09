import React from 'react'
import { useNavigate } from 'react-router-dom'
import { socket } from '../services/Socket'


const PairedDevice = () => {
  const navigate = useNavigate()
  const pairedDevice = JSON.parse(localStorage.getItem('vaccumData'));

  const manualControl = () =>{
    const url = '/controller/' + pairedDevice.access_token
    navigate(url)
  }

  return (
    <div className="container py-3 m-0 d-flex flex-column align-items-center justify-content-between flex-grow-1">
        <div onClick={manualControl} className='bg-cstm-1 text-white w-100 rounded-2 border p-3 d-flex justify-content-between align-items-center'>
            Manual Control
            <img width="30" height="30" src="https://img.icons8.com/ios/100/FFFFFF/joystick.png" alt="joystick"/>
        </div>
    </div>
  )
}

export default PairedDevice