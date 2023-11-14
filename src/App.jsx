import {useEffect,useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import { socket } from './services/Socket';

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style_config.css';

import LoginForm from './components/loginAuth';
import RegistrationForm from './components/registerAuth';
import Home from './pages/home';

const App = () => {
  const [image_src, set_img_src] = useState(null)

  useEffect(() =>{
    socket.disconnect();
    socket.connect()

    socket.on('manual_control', (req)=>{
      set_img_src(req.frame_src);

    })
  
  },[])

  return (
    <div className="container main-wrapper p-0">
      <div className="sub-wrapper">
          <Home/>
      </div>
    </div>
  )
}

export default App