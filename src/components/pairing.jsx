import {Component,createRef} from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { CButton } from "@coreui/react";

import search_icon from '../static/assets/search-logo.svg';
import Loader from "./loader";


class Pairing extends Component {
    constructor(){
        super();
        this.state = {
            loader: false,
            devices: false
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
            <FadeIn>
                <div className="pairing-wrapper d-flex flex-column align-items-center">
                    {
                        this.state.loader ? <Loader label={this.state.devices ? 'connecting' : 'searching'}/>
                        :
                            this.state.devices ? 
                                <>
                                    <div className="device-list-wrapper p-3 d-flex flex-column justify-content-start align-items-start bg-cstm-1  p-2 rounded-3">
                                        <h5 className="text-white fw-medium border-bottom w-100 py-2">Available device</h5>
                                        <FadeIn className="my-3 d-flex flex-column row-gap-2 list-wrapper w-100 ">
                                            <span onClick={this.select_device} className="d-flex text-white w-100 border p-1 px-3 rounded-1">device 1</span>
                                        </FadeIn>
                                        <CButton onClick={this.connect_device} className="bg-white d-flex justify-content-center column-gap-3 align-items-center text-cstm-1 mt-2 border border-none w-100">
                                            <span className="fw-medium">Connect</span>
                                            <img width="30" height="30" src="https://img.icons8.com/pulsar-line/48/000000/share-2.png"/>
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
            </FadeIn>
        )
    }
};


export default Pairing