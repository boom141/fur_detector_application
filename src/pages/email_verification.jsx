import React from "react";
import { Link, useMatch } from "react-router-dom";

const Email_verification = ({url}) => {
    const authorized = JSON.parse(localStorage.getItem('authorized'));
    localStorage.clear();

    const match = useMatch(url)

  return (
    <div className="verification-flag d-flex flex-column flex-grow-1 justify-content-center align-items-center">
        <img height={80} src="https://img.icons8.com/pulsar-line/96/08182F/reading-confirmation.png"/>
        {
            match.params.purpose === 'reset' ? 
                <>
                    <p className="mt-3 fw-bold text-center ">
                        Email sent! <br />
                        <span className="fw-medium">A password reset link 
                        was sent to this email <br /> <span className="fw-semibold"><u>{authorized.email}</u></span></span>
                    </p>
                    <div className='d-flex justify-content-between column-gap-3'>
                        <Link to='/resetPassword' className="bg-transparent mt-2 border border-dark text-decoration-none text-dark rounded-3 p-2">Try again</Link>
                        <Link to='/signin' className="bg-cstm-1 mt-2 border text-decoration-none text-white rounded-3 p-2">Go back</Link>
                    </div>
                </>

            :
                <>
                    <p className="mt-3 fw-bold text-center ">
                        Email sent! <br />
                        <span className="fw-medium">Email needs to be verified, a verification link <br /> 
                        was sent to this email <span className="fw-semibold"><u>{authorized.email}</u></span></span>
                    </p>
                    <Link to='/signin' className="bg-cstm-1 text-white rounded-3 px-3 py-2 d-flex flex-row align-items-center text-decoration-none">
                        Go back
                    </Link>
                </>
        }
        
    </div>                    
  )
}

export default Email_verification