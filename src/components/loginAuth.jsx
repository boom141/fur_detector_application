import {Component} from "react";
import { CButton, CFormInput } from "@coreui/react";
import { Link } from "react-router-dom";
import { google_login } from "../services/firebase";

import '../static/css/auth.css';

class LoginForm extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="authentication-form d-flex justify-content-center px-3">
                <div className="d-flex flex-column w-100 mt-5">
                    <span className="fw-medium">Welcome Back!</span>
                    <CFormInput type="email" floatingClassName="mt-3  text-cstm-5" floatingLabel="Enter Email" placeholder="name@example.com"/>
                    <CFormInput type="password" floatingClassName="mt-3  text-cstm-5" floatingLabel="Enter Password" placeholder="password"/>

                    <span role="button" className="forgot-password text-end mt-2 text-cstm-2">Forgot password ?</span>
                    <CButton className="bg-cstm-1 mt-4 border border-none">Sign in</CButton>
                    <span className="register-suggestion text-center mt-4">Don't have an account?
                        <Link to='/signup' className="text-cstm-2 text-decoration-none"> Sign up</Link>
                    </span>

                    <div className="d-flex flex-column text-center text-light mt-3">
                        <div className="mt-4 text-dark fw-medium position-relative">
                            <hr className="bg-cstm-5" />
                            <span className="position-absolute top-50 start-50 translate-middle bg-white px-3">Or</span>
                        </div>
                        <span onClick={google_login} role="button" className="mt-3 border border-dark text-dark rounded-3 py-2 d-flex align-items-center justify-content-center">
                            <img height={30} src="https://img.icons8.com/fluency/96/google-logo.png" alt="google-logo"/> oogle
                        </span>
                    </div>
                </div>
            </div>
        )
    }

}

export default LoginForm