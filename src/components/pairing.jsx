import {Component,createRef} from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { CButton } from "@coreui/react";
import { Navigate } from "react-router-dom";

import search_icon from '../static/assets/search-logo.svg';
import Loader from "./loader";


class Pairing extends Component {
    constructor(){
        super();
        this.state = {
            loader: false,
            devices: true
        };
        this.loader_label = 'searching';
        this.selected_device = createRef([])
    }

    select_device = (e) =>{
        e.target.classList.add('selected')
    }

    connect_device = () =>{
        this.setState({loader: true})
    }

    search_device = () =>{
        this.setState({loader: true});
        // encapsulate the code below with a promise function
            this.setState({devices: true});
            this.setState({loader: false});
        //
    }

    render(){
        return(
        
                <div className="pairing-wrapper d-flex flex-column justify-content-center align-items-center flex-grow-1 w-100 p-2">
                    {
                        this.state.loader ? <Loader label={this.state.devices ? 'connecting' : 'searching'}/>
                        :
                            this.state.devices ? 
                                <>
                                    <div className="device-list-wrapper flex-grow-1 w-100 ">
                                        <h5 className="text-dark fw-medium border-bottom border-dark w-100 py-2">Available device</h5>
                                        <FadeIn className="list-wrapper my-3 d-flex flex-column row-gap-2  w-100 ">
                                            <span onClick={this.select_device} className="d-flex justify-content-between align-items-center bg-cstm-1 text-white w-100 border p-3 rounded-3">
                                                Bingbong cleaner
                                                <img width="30" height="30" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/vacuum-cleaner--v3.png" alt="vacuum-cleaner--v3"/>
                                            </span>       
                                        </FadeIn>
                                    </div>
                                    <div className="d-flex column-gap-3 w-100">
                                        <CButton onClick={()=> this.setState({devices:false})} className="bg-transparent d-flex justify-content-center column-gap-3 align-items-center text-dark mt-2 border-dark  w-100">
                                            <span className="fw-medium">Cancel</span>
                                        </CButton>
                                        <CButton onClick={this.connect_device} className="bg-cstm-1 d-flex justify-content-center column-gap-3 align-items-center text-white mt-2 border border-none w-100">
                                            <span className="fw-medium">Connect</span>
                                            <img width="30" height="30" src="https://img.icons8.com/pulsar-line/48/FFFFFF/network.png" alt="network"/>                    
                                        </CButton>
                                    </div>
                                </>
                                :
                                <>                    
                                    <img  height={80} src="https://img.icons8.com/pulsar-line/96/08182F/disconnected.png" className="image-orientation"/>
                                    <p className="mt-3 fw-bold text-center ">
                                        Device Disconnected <br />
                                        <span className="fw-medium  ">“Click” the button below to 
                                        <br /> search for your device</span>
                                    </p>
                                    <span onClick={this.search_device} role="button" className="bg-cstm-1 text-white rounded-3 px-3 py-2 d-flex flex-row column-gap-2 align-items-center">
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