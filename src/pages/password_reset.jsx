import {useState,useEffect,useRef} from 'react'
import { CButton, CAlert } from '@coreui/react'
import { useNavigate } from 'react-router-dom'

import { send_reset_pass } from '../services/firebase'
import Loader from '../components/loader'

const Reset_pass = () => {
  const [loader,set_loader] = useState(false)
  const [alert,set_alert] = useState(false)
  const [error_message,set_error_message] = useState(null) 

  const email = useRef(null)
  const navigate = useNavigate()

  const show_error = (error) =>{
        console.log(error)
        set_alert(true)
        set_error_message(error.split(':')[1])
        set_loader(false)
  }

  const request_reset_link = () =>{
    let email_value = email.current.value
    set_loader(true)
    if(email_value !== ''){
        send_reset_pass(email_value)
        .then(() => {
            localStorage.setItem('authorized',JSON.stringify({email:email_value}))     
            navigate('/verification/reset')
        })
        .catch(err => {
           show_error(err.message)
        })
    }else{
        show_error(':Field must be filled')
    }
  }
  
  return (
    
    <div className='d-flex justify-content-center align-items-center flex-grow-1'>
        {
            loader ? <Loader label="loading"/> :
                
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
        }
    </div>
  )
}

export default Reset_pass