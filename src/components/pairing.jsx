import {Component} from "react";

import dc_icon from '../static/assets/disconnected-logo.svg';
import search_icon from '../static/assets/search-logo.svg';

import Loader from "./loader";


class Pairing extends Component {
    constructor(){
        super();
        this.state = {
            loader: false
        };
    }

    set_loader = () =>{
        this.setState({loader: true});
    }

    render(){
        return(
            <div className="error-flag d-flex flex-column align-items-center">
                {
                    this.state.loader ? <Loader/>
                    :
                        <>                    
                            <img height={80} src={dc_icon}/>
                            <p className="mt-3 fw-bold text-center ">
                                Device Disconnected <br />
                                <span className="fw-medium  ">“Click” the button below to 
                                <br /> search for your device</span>
                            </p>
                            <span onClick={this.set_loader} role="button" className="bg-cstm-1 text-white rounded-3 px-3 py-2 d-flex flex-row column-gap-2 align-items-center">
                                search device
                                <img height={20} src={search_icon} />
                            </span>
                        </>
                }
            </div>
        )
    }
};


export default Pairing