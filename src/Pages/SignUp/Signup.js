import React, { useState } from "react";
import "./styles/Signup.css"; // Import the CSS file for styling
import Sign_up_first from "./components/sign_up_first";
import Sign_up_second from "./components/sign_up_second";
import Investor from "./components/investor";
import Client from "./components/client";

const Signup = () => {
  const [first_page, setFirstPage] = useState(true);
  const [second_page,setSecondPage] = useState(false);
  const [investor,setInvestor] = useState(false);
  const [client,setClient] = useState(false);
  const handleclick = ()=>{
    setFirstPage(false);
    setSecondPage(true);
  }
  const back = ()=>{
    setFirstPage(true);
    setSecondPage(false);
  }
  return (
    <div className="container">
      <div className="left-section">
        {first_page && <Sign_up_first handleclick={handleclick}/>}
        {second_page && <Sign_up_second Investor={()=>{setInvestor(true);setSecondPage(false)}} goBack={back} Client={()=>{setSecondPage(false);setClient(true)}}/>}
        {investor && <Investor goBack={()=>{setInvestor(false);setSecondPage(true)}}/>}
        {client && <Client goBack={()=>{setClient(false);setSecondPage(true)}}/>}
      </div>
      <div className="right-section">
        <div className="analytics">
          <div className="graph">Analytics Graph</div>
          <div className="progress">42% Progress</div>
        </div>
        <p className="description">Very simple way you can engage</p>
        <p>Welcome to DAILY Inventory Management System! Efficiently track and manage your inventory with ease.</p>
      </div>
    </div>
  );
};

export default Signup;
