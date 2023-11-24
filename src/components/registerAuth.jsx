import {Component,createRef} from "react";

import { Link } from "react-router-dom";
import { google_login_auth, register_user_auth, verify_email} from "../services/firebase";
import { check_fields, match_fields } from "../services/form_srvc";

import { CFormInput, CButton, CAlert} from "@coreui/react";
import Loader from "./loader";

import '../static/css/auth.css';

class RegistrationForm extends Component{
    constructor(){
        super();
        this.state = {
            alert: false,
            alert_message:null,
            loader: false
        }
        this.email = createRef(),
        this.pass = createRef(),
        this.re_pass = createRef()
    }

    show_form_error = (error_message) =>{
        this.setState({loader:false, alert:true});
        this.setState({alert_message:error_message.split(':')[1]});
    }

    google_login = () =>{
        this.setState({loader:true});
        google_login_auth()
        .catch(err => this.show_form_error(err.message));
    }

    register_account = () =>{
        let email = this.email.current;
        let pass = this.pass.current;
        let re_pass = this.re_pass.current;
        if(check_fields([email,pass,re_pass])){
            if(match_fields(pass.value,re_pass.value)){
                this.setState({loader:true})
                register_user_auth(email.value,pass.value)
                .then(user_credentials => verify_email(user_credentials.user))
                .catch(err => this.show_form_error(err.message))
            }else{
                this.show_form_error(':Password does not match');
            }
        }else{
            this.show_form_error(':Fields must be provided');
        }

    }

    render(){
        return(
            <div className="authentication-form d-flex flex-column flex-grow-1 justify-content-start align-items-center px-3">
                {
                    this.state.loader ? <Loader label='Loading'/> :

                        <div className="d-flex flex-column w-100 mt-5">
                            <span className="fw-medium">Create your account</span>
                            <CFormInput ref={this.email} required={true} type="email" floatingClassName="mt-3  text-cstm-5" floatingLabel="Enter Email" placeholder="name@example.com"/>
                            <CFormInput ref={this.pass} type="password" floatingClassName="mt-3  text-cstm-5" floatingLabel="Enter Password" placeholder="password"/>
                            <CFormInput ref={this.re_pass} type="password" floatingClassName="mt-3  text-cstm-5" floatingLabel="Re-enter Password" placeholder="password"/>
                            {
                                this.state.alert ? 
                                <CAlert color="danger" className="alert mt-3 p-3 d-flex align-items-cener" dismissible onClose={() => this.setState({alert:false})}>
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
                                <span onClick={this.google_login} role="button" className="mt-3 border border-dark text-dark rounded-3 py-2 d-flex align-items-center justify-content-center">
                                    <img height={30} src="https://img.icons8.com/fluency/96/google-logo.png" alt="google-logo"/> oogle
                                </span>
                            </div>
                        </div>
                }
            </div>
        )
    }
}

export default RegistrationForm