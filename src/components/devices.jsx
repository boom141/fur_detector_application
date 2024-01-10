import React from "react";
import { useNavigate  } from "react-router-dom";
import { socket } from "../services/Socket";

const Devices = ({vaccumData}) => {
  const navigate = useNavigate()

  const connectToVacuum = () =>{
    localStorage.setItem('vaccumData', JSON.stringify(vaccumData));
    const authorized = JSON.parse(localStorage.getItem('authorized'));
    socket.connect()
    socket.emit('vaccumUserAuth', {user:authorized.email, device:vaccumData});   
    window.location.reload()
  }

  return (
    <span onClick={connectToVacuum} className="d-flex justify-content-between align-items-center bg-cstm-1 text-white w-100 border p-3 rounded-3">
        {vaccumData.name}
        <img width="30" height="30" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/vacuum-cleaner--v3.png" alt="vacuum-cleaner--v3"/>
    </span>  
  )
}

export default Devices