import {Component} from "react";

import '../static/css/auth.css';


class RegistrationForm extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="authentication-form d-flex justify-content-center px-3">
                <div className="d-flex flex-column w-100 mt-5">
                    <span className="fw-medium">Create your account</span>
                    <input type="text" class="form-control mt-3 bg-cstm-4 text-cstm-5 border-none" placeholder="Enter Email"/>
                    <input type="password" class="form-control mt-3 bg-cstm-4 text-cstm-5 border-none" placeholder="Enter Password"/>
                    <input type="password" class="form-control mt-3 bg-cstm-4 text-cstm-5 border-none" placeholder="Re-enter Password"/>

                    <span className="text-center rounded-3 mt-5 py-2 bg-cstm-1 text-light">Sign up</span>
                    <span className="register-suggestion text-center mt-4">Already have an account?
                        <span role="button" className="text-cstm-2"> Sign in</span>
                    </span>

                    <div className="d-flex flex-column text-center text-light mt-3">
                        <div className="mt-4 text-dark fw-medium position-relative">
                            <hr className="bg-cstm-5" />
                            <span className="position-absolute top-50 start-50 translate-middle bg-white px-3">Or</span>
                        </div>
                        <span role="button" className="mt-3 border border-dark text-dark rounded-3 py-2 d-flex align-items-center justify-content-center">
                            <img height={30} src="https://img.icons8.com/fluency/96/google-logo.png" alt="google-logo"/> oogle
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default RegistrationForm