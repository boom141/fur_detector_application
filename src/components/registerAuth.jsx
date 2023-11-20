import {Component,createRef} from "react";
import { CFormInput, CButton, CAlert} from "@coreui/react";

import { Link } from "react-router-dom";
import { google_login_auth, register_user_auth, actionCodeSettings} from "../services/firebase";
import { sendEmailVerification } from "firebase/auth";

import '../static/css/auth.css';

class RegistrationForm extends Component{
    constructor(){
        super();
        this.state = {
            alert: false,
            alert_message:null
        }
        this.email = createRef();
        this.pass = createRef();
        this.re_pass = createRef();
        this.alert = createRef();
    }


    match_passwords = (pass,re_pass) =>{
        if (pass === re_pass) 
            return true;
        return false;
    }

    register_account = () =>{
        let email = this.email.current.value;
        let pass = this.pass.current.value;
        let re_pass = this.re_pass.current.value;
        if(this.match_passwords(pass,re_pass)){
            register_user_auth(email,pass)
            .then(user_credentials => {
                sendEmailVerification(user_credentials.user)
                .then(() => {
                    localStorage.setItem('access_token',user_credentials.user.email) 
                    window.location.assign('/verification')
                })
                .catch(err => console.log(err))
            
            })
            .catch(err => {
                this.setState({alert:true, alert_message:err.code});
            })
        }else{
            this.setState({alert:true, alert_message: 'password does not match'});
        }
    }

    render(){
        return(
            <div className="authentication-form d-flex justify-content-center px-3">
                <div className="d-flex flex-column w-100 mt-5">
                    <span className="fw-medium">Create your account</span>
                    <CFormInput ref={this.email} type="email" floatingClassName="mt-3  text-cstm-5" floatingLabel="Enter Email" placeholder="name@example.com"/>
                    <CFormInput ref={this.pass} type="password" floatingClassName="mt-3  text-cstm-5" floatingLabel="Enter Password" placeholder="password"/>
                    <CFormInput ref={this.re_pass} type="password" floatingClassName="mt-3  text-cstm-5" floatingLabel="Re-enter Password" placeholder="password"/>
                    {
                        this.state.alert ? 
                        <CAlert color="warning" className="alert mt-3 p-3 d-flex align-items-cener" dismissible visible={this.state.close_alert} onClose={() => this.setState({alert:false})}>
                            {this.state.alert_message}
                        </CAlert>
                        :
                        false
                    }
                    <CButton onClick={this.register_account} className="bg-cstm-1 mt-4 border border-none">Sign up</CButton>
                    <span className="register-suggestion text-center mt-4">Already have an account?
                        <Link to='/signin' className="text-cstm-2 text-decoration-none"> Sign in</Link>
                    </span>

                    <div className="d-flex flex-column text-center text-light mt-3">
                        <div className="mt-4 text-dark fw-medium position-relative">
                            <hr className="bg-cstm-5" />
                            <span className="position-absolute top-50 start-50 translate-middle bg-white px-3">Or</span>
                        </div>
                        <span onClick={google_login_auth} role="button" className="mt-3 border border-dark text-dark rounded-3 py-2 d-flex align-items-center justify-content-center">
                            <img height={30} src="https://img.icons8.com/fluency/96/google-logo.png" alt="google-logo"/> oogle
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegistrationForm