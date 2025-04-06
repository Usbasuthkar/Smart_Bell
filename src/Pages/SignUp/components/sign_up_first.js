import React from "react";
import { Link } from "react-router-dom";
export default function Sign_up_first({handleclick}){
    return(
        <div>
            <div style={{display:'flex',justifyContent:'center'}}><center><h1>Create an account</h1></center></div>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="terms">
            <div><input type="checkbox" id="terms" /></div>
            <label htmlFor="terms">I agree to all the Terms & Conditions</label>
          </div>

          <button onClick={handleclick} type="submit">Sign up</button>
        </form>
        <div className="social-login">
          <button className="google">Google</button>
          <button className="facebook">Facebook</button>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginTop:'20px'}}><p>Already have an account? <Link to="/login">Log in</Link></p></div>
        </div>
    )
}