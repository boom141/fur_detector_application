import {Component} from 'react'
import { auth } from '../services/firebase';
import { Link } from 'react-router-dom';
import { 
    COffcanvas, 
    COffcanvasBody, 
    COffcanvasHeader, 
    COffcanvasTitle,
    CButton,
    CAvatar
  } from '@coreui/react';

import hamburger_menu from '../static/assets/hamburger-menu-icon.svg';
import hamburger_close from '../static/assets/close-menu.svg';
import sample_avatar from '../static/assets/sample-asian-man.jpg';
import device_icon from '../static/assets/device.svg';
import remote_icon from '../static/assets/remote.svg';
import notif_icon from '../static/assets/notif.svg';
import logout_icon from '../static/assets/logout.svg';




class Offcanvas extends Component{
    constructor(){
        super()
        this.state = {
            visible: false
        };

    }

    set_visibility = () =>{
        this.setState({visible: !this.state.visible});
    }
    
    render(){
        return(
            <>         
                <CButton className='offcanvas-btn p-0 bg-transparent border border-none' onClick={this.set_visibility} >
                    <img className='m-3' height={20} src={hamburger_menu} alt="" />
                </CButton>
                <COffcanvas className='bg-cstm-1 w-75' placement="start" visible={this.state.visible}>
                    <COffcanvasHeader>
                    <div className='user-header d-flex column-gap-4 justify-content-between align-items-center'>
                        <CAvatar className='avatar' src={sample_avatar}/>
                        <div className='d-flex flex-column'>
                            <span className='text-white'>sampleEmail@email.com</span>
                        </div>
                    </div>
                    <img className='hamburger-close' src={hamburger_close} onClick={this.set_visibility}/>
                    </COffcanvasHeader>
                    <hr/>
                    <COffcanvasBody className='d-flex flex-column row-gap-3 px-4'>
                        <Link className='text-decoration-none text-white fw-light d-flex column-gap-3'>
                        <img src={device_icon}/> Device
                        </Link>
                        {/* <Link className='text-decoration-none text-white fw-light d-flex column-gap-3'>
                        <img src={remote_icon}/> Remote Control
                        </Link>
                        <Link className='text-decoration-none text-white fw-light d-flex column-gap-3'>
                        <img src={notif_icon}/> Notification
                        </Link> */}
                    </COffcanvasBody>
                        <hr/>
                        <Link className='p-3 text-decoration-none text-white fw-light d-flex column-gap-3'>
                        <img src={logout_icon}/> Log out
                    </Link>
                </COffcanvas>
            </>
        )
    }
}


export default Offcanvas