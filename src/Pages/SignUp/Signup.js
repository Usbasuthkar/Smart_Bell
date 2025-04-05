import React from "react";
import "./styles/Signup.css"; // Import the CSS file for styling

const Signup = () => {
  return (
    <div className="container">
      <div className="left-section">
        <center><h1>Create an account</h1></center>
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

          <button type="submit">Sign up</button>
        </form>
        <div className="social-login">
          <button className="google">Google</button>
          <button className="facebook">Facebook</button>
        </div>
        <p>Already have an account? <a href="#">Log in</a></p>
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
