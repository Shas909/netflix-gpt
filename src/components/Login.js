import React, { useState } from "react";
import Header from "./Header";
import "../styles/login.css";

const Login = () => {
  const [signUpFlag, setSignUpFlag] = useState(false);
  const handleSignUp = () => {
    setSignUpFlag(!signUpFlag);
  };
  return (
    <div className="login">
      <Header />
      <div className="login-card">
        <form className="login-inner">
          <span>{signUpFlag ? "Sign Up" : "Sign In"}</span>
          <div className="input-container">
            <input placeholder="Enter Email or Mobile number" />
            <input placeholder="Enter Password" />
            <button>{signUpFlag ? "Sign Up" : "Sign In"}</button>
            <span className="forgot">Forgot password?</span>
          </div>
          <span className="new">
            {signUpFlag ? "Already a user?" : "New to Netflix?"}{" "}
            <span
              style={{ fontWeight: "bold", cursor: "pointer" }}
              onClick={handleSignUp}
            >
              {signUpFlag ? "Sign Up now" : "Sign In now"}
            </span>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
