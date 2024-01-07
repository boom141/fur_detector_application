const Devices = ({deviceName}) => {

  return (
    <span className="d-flex justify-content-between align-items-center bg-cstm-1 text-white w-100 border p-3 rounded-3">
        {deviceName}
        <img width="30" height="30" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/vacuum-cleaner--v3.png" alt="vacuum-cleaner--v3"/>
    </span>  
  )
}

export default Devices