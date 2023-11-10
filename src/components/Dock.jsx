import React from 'react'
import DockButtons from './DockButtons'

const Dock = () => {
  return (
    <>
        <div className='container mt-5 align-self-end p-0'>
            <div className='blur-backdrop dock mx-4  p-3 px-4 rounded-top-3'>
                <DockButtons />
            </div>
        </div>
    </>
  )
}

export default Dock