import {useEffect,useState} from 'react'
import { Route, Routes } from 'react-router-dom';

import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style_config.css';
import './static/css/base.css';


import Offcanvas from './components/offcanvas';
import LoginForm from './components/loginAuth';
import RegistrationForm from './components/registerAuth';

import Home from './pages/home';


const App = () => {
  return (
    <div className="container-sm main-wrapper p-0">
      <div className="sub-wrapper">
          <div className="greetings position-relative overflow-hidden">
              <Offcanvas/>
              <div className='d-flex flex-column p-5'>
                <span className='text-white text-center fs-1 fw-bold'>Good Day !</span>
                <span className='text-white text-center fw-normal'>6 pending notification</span>
              </div>
          </div>
      </div>
    </div>
  )
}

export default App