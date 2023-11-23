import {useState,useEffect,useRef} from 'react'
import { CButton, CAlert } from '@coreui/react'
import { send_reset_pass } from '../services/firebase'

import Loader from '../components/loader'
import { Link } from 'react-router-dom'

const Reset_pass = () => {
  const [loader,set_loader] = useState(false)
  const [alert,set_alert] = useState(false)
  const [error_message,set_error_message] = useState(null) 

  const email = useRef(null)


  const request_reset_link = () =>{
      // set_loader(true)
    send_reset_pass(email.current.value)
    .then(() => {
        localStorage.setItem('authorized',JSON.stringify({email:email.current.value}))     
        window.location.replace('/verification/reset')
    })
    .catch(err => {
        // set_loader(false)
        set_alert(true)
        set_error_message(err.message.split(':')[1])
    })
  }
  
  useState(()=>{
    
  })
  
  return (
    <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <img height={80} width={80} src="https://img.icons8.com/ios-filled/100/08182F/update-left-rotation.png" />
            <p className='mt-3 fs-6 fw-bold text-center'>Enter email to get a reset link</p>
            <input ref={email} type="email" className='form-control' placeholder='Enter Email'/>
            {
                alert ?
                
                    <CAlert color="danger" className="alert mt-3 p-3 d-flex align-items-center w-100" dismissible onClose={() => set_alert(false)}>
                            {error_message}
                    </CAlert>
                :
                    false
            }
            <CButton onClick={request_reset_link} className="bg-cstm-1 mt-2 border border-none">Submit</CButton>
        </div>
    </div>
  )
}

export default Reset_pass