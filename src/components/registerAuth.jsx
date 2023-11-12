import {Component} from "react";
import '../static/css/auth.css';
import bot_logo from '../static/assets/bot-logo.svg'
import { Google } from "react-bootstrap-icons";

class RegistrationForm extends Component{
    constructor(){
        super();
    }



    render(){
        return(
            <div className="authentication-form d-flex justify-content-center px-3">
                <div className="d-flex flex-column w-100 mt-5">
                    <img height={80} src={bot_logo} alt="" />
                    <span className="text-light mt-5">Login to your Account</span>
                    <input type="text" class="form-control mt-3" placeholder="Enter your Email"/>
                    <input type="password" class="form-control mt-3" placeholder="Enter your Password"/>
                    <span className="border text-center rounded-3 mt-3 py-2 text-light">Sign in</span>
                    <div className=" d-flex flex-column text-center text-light mt-3">
                        <span className="">Or login with:</span>
                        <span className="mt-3 border rounded-3 py-2 d-flex align-items-center justify-content-center">
                        <img height={30} src="https://img.icons8.com/fluency/96/google-logo.png" alt="google-logo"/> oogle
                        </span>
                    </div>
                    <span className="text-center mt-5 text-light">Don't have an account?<span className="text-th1"> Sign up</span></span>
                </div>
            </div>
        )
    }

}

export default RegistrationForm