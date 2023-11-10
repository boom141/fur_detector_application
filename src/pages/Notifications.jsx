import React from 'react'
import FadeIn from 'react-fade-in';
import SwitchButton from '../components/SwitchButton'
import notification_logo from '../static/assets/notification-logo.svg'


const Notifications = () => {
  return (
    <>
        <h5 className='path-name text-white fw-normal d-flex flex-row justify-content-start align-items-center'>
            <img height={20} src={notification_logo} alt="" />     Notifications
        </h5>
            <FadeIn className='page-container'>
                <div className="component-scroll d-flex flex-column row-gap-3">
                    <div className='blur-backdrop d-flex flex-row justify-content-between  p-3 rounded-3'>
                        <span className='text-light fw-normal'>Moisture</span>
                        <SwitchButton moisture={true}/>
                    </div>
                
                    <div className='blur-backdrop d-flex flex-row justify-content-between  p-3 rounded-3'>
                        <span className='text-light fw-normal'>Compartment</span>
                        <SwitchButton compartment={true}/>
                    </div>

                    <div className='blur-backdrop d-flex flex-row justify-content-between  p-3 rounded-3'>
                        <span className='text-light fw-normal'>Low battery</span>
                        <SwitchButton low_battery={true}/>
                    </div>
                </div>
            </FadeIn>
    </>
  )
}

export default Notifications