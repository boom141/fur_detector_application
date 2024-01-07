import React,{useState,useEffect} from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { CButton } from "@coreui/react";
import { socket } from "../services/Socket";

import search_icon from '../static/assets/search-logo.svg';
import Loader from "./loader";
import Devices from "./devices";

const Pairing = () =>{
    const [loader,setLoader] = useState(false);
    const [devices,setDevices] = useState(false);
    const [deviceList,setDeviceList]= useState([]);

    useEffect(() =>{
        socket.connect()
        socket.on('getConnectedVaccum', data =>{
            setDeviceList([...data])
        })
    },[deviceList]);

    const cancelPairing = () =>{
        setDevices(false);
        socket.disconnect();
    }

    const searchDevice = () =>{
        setDevices(true);
    }

    const refreshDeviceList = () =>{
        return 0
    }

    return(
        <div className="pairing-wrapper d-flex flex-column justify-content-center align-items-center flex-grow-1 w-100 p-2">
            {
                loader ? <Loader label={devices ? 'connecting' : 'searching'}/>
                :
                    devices ? 
                        <>
                            <div className="device-list-wrapper flex-grow-1 w-100 ">
                                <h5 className="text-dark fw-medium border-bottom border-dark w-100 py-2">Available device</h5>
                                <FadeIn className="list-wrapper my-3 d-flex flex-column row-gap-2  w-100 ">
                                    {
                                        deviceList.map((device,index) =>(
                                            <Devices key={index} deviceName={device.name}/>      
                                        ))
                                    }
                                </FadeIn>
                            </div>
                            <div className="d-flex column-gap-3 w-100">
                                <CButton onClick={cancelPairing} className="bg-transparent d-flex justify-content-center column-gap-3 align-items-center text-dark mt-2 border-dark  w-100">
                                    <span className="fw-medium">Cancel</span>
                                </CButton>
                                <CButton onClick={refreshDeviceList} className="bg-cstm-1 d-flex justify-content-center column-gap-3 align-items-center text-white mt-2 border border-none w-100">
                                    <span className="fw-medium">Refresh</span>
                                    <img width="20" height="20" src="https://img.icons8.com/material-rounded/24/FFFFFF/refresh.png" alt="network"/>                    
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
                            <span onClick={searchDevice} role="button" className="bg-cstm-1 text-white rounded-3 px-3 py-2 d-flex flex-row column-gap-2 align-items-center">
                                search device
                                <img height={20} src={search_icon} />
                            </span>
                        </>
            }
        </div>
    
    )
};

export default Pairing