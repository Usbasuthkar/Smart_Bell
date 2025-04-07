import React, { useState } from "react";

export default function Modal({ onClose, handleVerify,setOtpFromUser }) {
    const [otp,setOtp] = useState('');
    const handleverify = ()=>{
        if(otp.length === 0){
            alert("Enter the  OTP!!");
            return;
        }
        setOtpFromUser(otp)
        handleVerify();
    }
  return (
    <div>
      <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <div className="modal-dialog" style={{ width: "60%" }} role="document">
          <div className="modal-content">
            <div className="modal-header" style={{ display: "flex", justifyContent: "space-between" }}>
              <h5 className="modal-title">Modal title</h5>
              <button
                style={{
                  background: "transparent",
                  color: "black",
                  fontSize: "30px",
                  padding: 0,
                  marginRight: "10px",
                  marginTop: "-10px",
                }}
                type="button"
                className="close"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Enter the OTP you recieved in your Email</p>
              <input onChange={(e)=>{setOtp(e.target.value)}} value={otp}/>
            </div>
            <div className="modal-footer">
              <button onClick={handleverify} type="button" className="btn btn-primary">
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
