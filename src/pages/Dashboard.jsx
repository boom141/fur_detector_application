import React from 'react'
import FadeIn from 'react-fade-in'


import dashboard_logo from '../static/assets/dashboard-logo.svg'
import CircularGauge from '../components/CircularGauge'


const Dashboard = () => {
  return (
    <>
        <h5 className='path-name text-white fw-normal d-flex flex-row justify-content-start align-items-center'>
            <img height={20} src={dashboard_logo} alt="" />     Dashboard
        </h5>

        <FadeIn className='page-container'>
            <div className="component-scroll d-flex flex-column row-gap-3">
                <div className='blur-backdrop d-flex flex-row justify-content-between align-items-center p-3 rounded-3'>
                    <CircularGauge percentage={40}/>
                    <span className='text-light fw-normal'>Moisture Level</span>
                </div>
            </div>
        </FadeIn>
    </>
    )
}

export default Dashboard