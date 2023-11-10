import React from 'react'
import FadeIn from 'react-fade-in'

import manual_logo from '../static/assets/manual-logo.svg'
import power_logo from '../static/assets/power-on.svg'

const Control = () => {

  return (
    <>
      <h5 className='path-name text-white fw-normal d-flex flex-row justify-content-start align-items-center'>
          <img height={20} src={power_logo} alt="" />     Device
      </h5>
          <FadeIn className='page-container'>
              <div className="component-scroll d-flex flex-column row-gap-3">
                  <div className='blur-backdrop d-flex flex-row justify-content-between align-items-center p-3 rounded-3'>
                      <img height={50} src={manual_logo} alt="" />
                      <span className=' text-light fw-normal text-end'>Manual Control</span>
                  </div>
              </div>
          </FadeIn>
    </>
  )
}

export default Control