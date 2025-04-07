import React, { useState } from "react";
import "./styles/Signup.css"; // Import the CSS file for styling
import Signupfirst from "./components/sign_up_first";
import Signupsecond from "./components/sign_up_second";
import Investor from "./components/investor";
import Client from "./components/client";

const Signup = () => {
  const [Email,setEmail] = useState('');
  const [first_page, setFirstPage] = useState(true);
  const [second_page,setSecondPage] = useState(false);
  const [investor,setInvestor] = useState(false);
  const [client,setClient] = useState(false);
 

  const handleclick = (email)=>{
    setFirstPage(false);
    setSecondPage(true);
    setEmail(email);
  }
  const back = ()=>{
    setFirstPage(true);
    setSecondPage(false);
  }
  return (
    <div >
      <div className="container">
      <div className="left-section">
        {first_page && <Signupfirst handleclick={handleclick}/>}
        {second_page && <Signupsecond Investor={()=>{setInvestor(true);setSecondPage(false)}} goBack={back} Client={()=>{setSecondPage(false);setClient(true)}}/>}
        {investor && <Investor email={Email} goBack={()=>{setInvestor(false);setSecondPage(true)}}/>}
        {client && <Client email= {Email} goBack={()=>{setClient(false);setSecondPage(true)}}/>}
      </div>
      <div className="right-section">
        <img src="Signup_img.jpg" alt="Image" width={"100%"}/>
      </div>
    </div>
    </div>
  );
};

export default Signup;
