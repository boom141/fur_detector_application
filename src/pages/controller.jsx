import React, {useEffect,useState} from 'react'
import '../static/css/controller.css'
import { socket } from '../services/Socket'

const Controller = () => {
  const [frame,setFrame] = useState(null) 
    
  useEffect(()=>{
    socket.connect()
    socket.emit('initManualControl')

    socket.on('viewFrame', data =>{
        const mime_type = 'data:image/jpg;base64,';
        const image_src = mime_type + data
        setFrame(image_src)
    },[frame])
  })


  const buttonControl = (e) =>{
    socket.emit('requestManualMove', e.target.id)
  }

  return (
    <div className='container d-flex flex-column justify-content-between align-items-center h-100 py-3'>
        <div className='d-flex h-50'>
            <img className='w-100' src={frame} alt="" />
        </div>
        <div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <img onClick={buttonControl} className='keypad-pressed' id='forward' width="64" height="64" src="https://img.icons8.com/wired/64/up-arrow-key.png" alt="up-arrow-key"/>
                </div>
                <div className="col-4"></div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img onClick={buttonControl} className='keypad-pressed' id='left' width="64" height="64" src="https://img.icons8.com/wired/64/left-arrow-key.png" alt="left-arrow-key"/>
                </div>
                <div className="col-4">
                    <img onClick={buttonControl} className='keypad-pressed' id='stop' width="64" height="64" src="https://img.icons8.com/wired/64/stop-sign.png" alt="stop-sign"/>
                </div>
                <div className="col-4">
                    <img onClick={buttonControl} className='keypad-pressed' id='right' width="64" height="64" src="https://img.icons8.com/wired/64/right-arrow-key.png" alt="right-arrow-key"/>
                </div>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <img onClick={buttonControl} className='keypad-pressed' id='backward' width="64" height="64" src="https://img.icons8.com/wired/64/down-arrow-key.png" alt="down-arrow-key"/>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    </div>
  )
}

export default Controller