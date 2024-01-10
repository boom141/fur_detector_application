import React, {useEffect,useState} from 'react'
import { CFormSwitch } from '@coreui/react'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { useNavigate } from 'react-router-dom'
import { socket } from '../services/Socket'

const PairedDevice = () => {
  const navigate = useNavigate()
  const pairedDevice = JSON.parse(localStorage.getItem('vaccumData'));

  const [program1,setProgram1] = useState(false)
  const [program2,setProgram2] = useState(false)

  useEffect(() =>{
    socket.connect()
    console.log(program1)
    socket.emit('initScanner',program1)
  },[program1]);
  

  const manualControl = () =>{
    const url = '/controller/' + pairedDevice.access_token
    navigate(url)
  }

  const disconnectVaccum = () =>{
    socket.emit('disconnectVaccum',pairedDevice)
    localStorage.removeItem('vaccumData')
    window.location.reload()
  }

  return (
    <>
    <div className="container flex-grow-1 py-3">
       <FadeIn className='p-0 m-0 d-flex flex-column justify-content-between border'>
          <div onClick={manualControl} className='bg-cstm-1 text-white rounded-2 border p-3 d-flex justify-content-between align-items-center'>
              Manual Control
              <img width="30" height="30" src="https://img.icons8.com/ios/100/FFFFFF/joystick.png" alt="joystick"/>
          </div>
          <div className='bg-cstm-1 text-white rounded-2 border p-3 d-flex justify-content-between align-items-center'>
              Fur Scanner
              <CFormSwitch onClick={()=>setProgram1(!program1)} id="formSwitchCheckDefaultNormal"/>
          </div>
       </FadeIn>
    </div>
    <div className='bg-cstm-1 text-white w-100 py-2 d-flex align-items-center justify-content-center'>
      <h3 onClick={disconnectVaccum} className='border border-white rounded-2 p-2'>
        Disconnect
      </h3>
    </div>
    </>
  )
}

export default PairedDevice