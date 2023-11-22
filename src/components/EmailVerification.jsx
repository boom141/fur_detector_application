import { Component } from "react";
import { Link } from "react-router-dom";

class Verification extends Component {
    constructor(){
        super()
        this.authorized = JSON.parse(localStorage.getItem('authorized'));
        localStorage.clear();
    }

    render(){
        return(
            <div className="verification-flag d-flex flex-column flex-grow-1 justify-content-center align-items-center">
                <img height={80} src="https://img.icons8.com/pulsar-line/96/08182F/reading-confirmation.png" alt="reading-confirmation"/>
                <p className="mt-3 fw-bold text-center ">
                    Email  verification sent! <br />
                    <span className="fw-medium">Email needs to be verified, a verification link <br /> 
                    was sent to this email <span className="fw-semibold"><u>{this.authorized.email}</u></span></span>
                </p>
                <Link to='/signin' className="bg-cstm-1 text-white rounded-3 px-3 py-2 d-flex flex-row align-items-center text-decoration-none">
                    go back
                </Link>
            </div>                    
            
        )
    }
}

export default Verification