import {useEffect,useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import { socket } from './components/Socket';

import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style_config.css';
import './static/css/components.css';

import Dock from './components/Dock';
import Device from './components/Device';
import Notifications from './pages/Notifications';
import Dashboard from './pages/Dashboard';
import Control from './pages/Control';
import Manual_Control from './components/ManualControl';


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
    <div className="container main-container p-0">
      <div className="wrapper d-flex flex-column">
          <Device/>
          <div className='container mt-5 main-content d-flex flex-column flex-grow-1'>
              <Routes>
                  <Route path='/' element={<Control />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/notifications' element={<Notifications />} />
              </Routes>
          </div>
          <Dock/>
      </div>
    </div>
  )
}

export default App