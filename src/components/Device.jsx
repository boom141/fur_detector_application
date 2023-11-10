import React from 'react'
import bot_logo from '../static/assets/bot-logo.svg'

const Device = () => {
  return (
    <div className='device mt-5'>
        <div className='container'>
            <div className='bot-greeting d-flex flex-row justify-content-between align-items-center px-3'>
                <div className="greeting-text">
                    <h1 className='fw-bold text-light'>Good Day! <br />
                        <span className='fw-lighter'>0 pending actions</span>
                    </h1>
                </div>
                <img src={bot_logo} alt="" />
            </div>
        </div>
        <div className="container mt-3">
            <div className="device-status blur-backdrop rounded-3 px-3">
                <div className='not-connected'>
                    <div className='d-flex flex-row justify-content-start align-items-start column-gap-4'>
                        <p className=' fw-lighter text-white'>
                            Device <br />
                            <span className=' fw-bold text-white'>Not Connected</span>
                        </p>
                    </div>
                    <p className=' fw-normal text-white w-75'>Please check WiFi connection of device and it will automatically connect.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Device