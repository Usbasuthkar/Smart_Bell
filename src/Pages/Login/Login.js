import React from "react";
import "./style/Loginpage.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        
        <h1>Welcome to Network Maverick</h1>
        <p>Sign in to your account below</p>

        <form>
          <label>Email</label>
          <input type="email" placeholder="e.g arbi@globalxtreme.net" />

          <label>Password</label>
          <div className="password-container">
            <input type="password" />
            <span className="eye-icon">👁</span>
          </div>

          <div className="options">
          <div style={{display:'flex'}}>
            <div style={{marginRight:10,marginTop:2}}>
             <input type="checkbox" />
          </div>
            <label>
               Keep Me Signed in
            </label>
          </div>
            <a href="/">Forgot password?</a>
          </div>

          <button className="signin-btn">Sign in</button>
        </form>

        <p className="version">Version <span>1.0.0</span></p>
        <p className="footer">© 2025 Network Maverick - Committed to better quality</p>
      </div>
      <div className="image-section">
        <img src="Login_img.jpg" alt="Scenic Beach" />
      </div>
    </div>
  );
};

export default LoginPage;
