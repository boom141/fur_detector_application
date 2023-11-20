import React from 'react'
import {Outlet} from 'react-router-dom';

import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/css/style_config.css';
import './static/css/base.css';


const App = () => {
  return (
    <div className="container-sm d-flex flex-column main-wrapper p-0">
        <Outlet/>
    </div>
  )
}

export default App