import React from 'react'

import dc_icon from '../static/assets/disconnected-icon.svg';

const Home = () => {
  return (
    <div className='d-flex flex-column'>
        <div className="device-status bg-cstm-1 m-4 p-4 rounded-3 d-flex justify-content-between align-items-center">
            <div className='text-white'>
                <span className='fs-3'>Device</span><br />
                <span className='fw-light'>Disconnected</span>
            </div>
            <img src={dc_icon} height={60} alt="" />
        </div>

        <div className='bg-cstm-1 mt-3 mx-5 p-4 rounded-3'>

        </div>

    </div>
  )
}

export default Home