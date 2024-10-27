import React, { useRef, useState } from "react";
import Header from "./Header";
import "../styles/login.css";

const Login = () => {
  const [signUpFlag, setSignUpFlag] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSignUp = () => {
    setSignUpFlag(!signUpFlag);
  };

  const signUpButton = () => {};
  const signInButton = () => {
    console.log(email.current.value);
    console.log(password.current.value);
  };
  return (
    <div className="login">
      <Header />
      <div className="login-card">
        <form onSubmit={(e) => e.preventDefault()} className="login-inner">
          <span>{signUpFlag ? "Sign Up" : "Sign In"}</span>
          <div className="input-container">
            {!signUpFlag ? (
              <>
                <input ref={email} placeholder="Enter Email or Mobile number" />
                <input ref={password} placeholder="Enter Password" />
                <button onClick={signInButton}>
                  {signUpFlag ? "Sign Up" : "Sign In"}
                </button>
                <span className="forgot">Forgot password?</span>
              </>
            ) : (
              <>
                <input ref={name} placeholder="Enter Name" />
                <input ref={email} placeholder="Enter Email" />
                <input ref={password} placeholder="Create Password" />
                <button onClick={signUpButton}>
                  {signUpFlag ? "Sign Up" : "Sign In"}
                </button>
                <span className="forgot">Forgot password?</span>
              </>
            )}
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
