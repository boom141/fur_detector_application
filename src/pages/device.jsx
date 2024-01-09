import { useState } from 'react'
import Offcanvas from '../components/offcanvas'
import Pairing from '../components/pairing'
import PairedDevice from './pairedDevice'

const Device = () => {
  const pairedDevice = JSON.parse(localStorage.getItem('vaccumData'));

  return (
      <div className="device-wrapper d-flex flex-column">
          <div className="greetings position-relative overflow-hidden">
              <Offcanvas/>
              <div className='d-flex flex-column p-5'>
                <span className='text-white text-center fs-1 fw-bold'>Good Day !</span>
                <span className='text-white text-center fw-normal'>6 pending notification</span>
              </div>
          </div>
          <div className='content-wrapper d-flex flex-column justify-content-center align-items-center flex-grow-1'>
              {
                pairedDevice ? 
                <PairedDevice/>
                :
                <Pairing/>
              }
              
          </div>
      </div>
  )
}

export default Device