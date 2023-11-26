import React, {useEffect} from 'react'
import { Outlet, useNavigate} from 'react-router-dom';

import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style_config.css';
import './static/css/base.css';


const App = () => {
  const navigate = useNavigate();
  const authorized = JSON.parse(localStorage.getItem('authorized'));

  useEffect(()=>{
    authorized ? navigate('/device') : false;
  },[])

  return (
    <div className="container-sm d-flex flex-column main-wrapper p-0">
        <Outlet/>
    </div>
  )
}

export default App