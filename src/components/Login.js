import React from "react";
import Header from "./Header";
import "../styles/login.css";

const Login = () => {
  return (
    <div className="login">
      <Header />
      <div className="login-card">
        <div className="login-inner">
          <span>Sign In</span>
          <div className="input-container">
            <input placeholder="Enter Email or Mobile number" />
            <input placeholder="Enter Password" />
            <button>Sign In</button>
            <span className="forgot">Forgot password?</span>
          </div>
          <span className="new">
            New to Netflix? <a style={{ fontWeight: "bold" }}>Sign Up now.</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
