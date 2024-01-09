import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

import LoginForm from './components/loginAuth';
import RegistrationForm from './components/registerAuth';
import Protected_page  from './pages/protected';
import Device from './pages/device';
import Reset_pass from './pages/password_reset';
import Email_verification from './pages/email_verification';
import Controller from './pages/controller';
import PairedDevice from './pages/pairedDevice';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
        <Route path='signin' element={<LoginForm />}/>
        <Route path='signup' element={<RegistrationForm />}/>
        <Route path='/' element={<Protected_page />}>
            <Route path='device' element={<Device/>}/>
        </Route>
        <Route path='/' element={<Protected_page />}>
          <Route path='verification/:purpose' element={<Email_verification url='/verification/:purpose'/>}/>
        </Route>
        <Route path='resetPassword' element={<Reset_pass/>}/>
        <Route path='controller/:access_token' element={<Controller/>}/>
        <Route path='homeDevice' element={<PairedDevice/>}/>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

