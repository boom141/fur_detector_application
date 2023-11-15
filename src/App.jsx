import {useEffect,useState} from 'react'
import { Route, Routes , Link} from 'react-router-dom';
import { socket } from './services/Socket';
import { Sling as Hamburger } from 'hamburger-react'
import { 
  COffcanvas, 
  COffcanvasBody, 
  COffcanvasHeader, 
  COffcanvasTitle,
  CButton,
  CAvatar
} from '@coreui/react';

import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style_config.css';
import './static/css/base.css';

import LoginForm from './components/loginAuth';
import RegistrationForm from './components/registerAuth';
import Home from './pages/home';

import hamburger_menu from './static/assets/hamburger-menu-icon.svg';
import hamburger_close from './static/assets/close-menu.svg';
import sample_avatar from './static/assets/sample-asian-man.jpg';
import device_icon from './static/assets/device.svg';
import remote_icon from './static/assets/remote.svg';
import notif_icon from './static/assets/notif.svg';
import logout_icon from './static/assets/logout.svg';

const App = () => {
  const [image_src, set_img_src] = useState(null)
  const [offcanvas, set_menu] = useState(false)


  useEffect(() =>{
    socket.disconnect();
    socket.connect()

    socket.on('manual_control', (req)=>{
      set_img_src(req.frame_src);

    })
  
  },[])

  return (
    <div className="container-sm main-wrapper p-0">
      <div className="sub-wrapper">
          <div className="greetings position-relative overflow-hidden">
              <CButton className='offcanvas-btn p-0 bg-transparent border border-none' onClick={() => set_menu(true)} >
                  <img className='m-3' height={20} src={hamburger_menu} alt="" />
              </CButton>
              <div className='d-flex flex-column p-5'>
                <span className='text-white text-center fs-1 fw-bold'>Good Day !</span>
                <span className='text-white text-center fw-normal'>6 pending notification</span>
              </div>
          </div>
      </div>
      <COffcanvas className='bg-cstm-1 w-75' placement="start" visible={offcanvas} onHide={() => set_menu(false)}>
        <COffcanvasHeader>
          <div className='user-header d-flex column-gap-4 justify-content-between align-items-center'>
            <CAvatar className='avatar' src={sample_avatar}/>
            <div className='d-flex flex-column'>
                <span className='text-white fw-bold'>Bingbong</span>
                <span className='text-cstm-2'>Bingbong@sampleEmail.com</span>
            </div>
          </div>
          <img className='hamburger-close' src={hamburger_close} onClick={() => set_menu(false)}/>
        </COffcanvasHeader>
          <hr/>
        <COffcanvasBody className='d-flex flex-column row-gap-3 px-4'>
            <Link className='text-decoration-none text-white fw-light d-flex column-gap-3'>
               <img src={device_icon}/> Device
            </Link>
            <Link className='text-decoration-none text-white fw-light d-flex column-gap-3'>
               <img src={remote_icon}/> Remote Control
            </Link>
            <Link className='text-decoration-none text-white fw-light d-flex column-gap-3'>
               <img src={notif_icon}/> Notification
            </Link>
        </COffcanvasBody>
            <hr/>
            <Link className='p-3 text-decoration-none text-white fw-light d-flex column-gap-3'>
               <img src={logout_icon}/> Log out
            </Link>
        
    </COffcanvas>
    </div>
  )
}

export default App