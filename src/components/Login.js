import React, { useRef, useState } from "react";
import Header from "./Header";
import "../styles/login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import Toast from "./Toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [signUpFlag, setSignUpFlag] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleSignUp = () => {
    setSignUpFlag(!signUpFlag);
  };

  const signUpButton = () => {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: name.current.value,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            // Profile updated!
            // ...
            navigate("/browse");
            setToastMsg("Successfully Signed Up");
            setShowToast(true);
          })
          .catch((error) => {
            window.alert("Couldn't get user details");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
        navigate("/");
      });
  };
  const signInButton = () => {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        setShowToast(true);
        setToastMsg("Successfully Signed In");
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
  };
  return (
    <>
      <Toast
        message={toastMsg}
        show={showToast}
        onClose={() => setShowToast(false)}
      />

      <div className="login">
        <Header />
        <div className="login-card">
          <form onSubmit={(e) => e.preventDefault()} className="login-inner">
            <span>{signUpFlag ? "Sign Up" : "Sign In"}</span>
            <div className="input-container">
              {!signUpFlag ? (
                <>
                  <input
                    ref={email}
                    placeholder="Enter Email or Mobile number"
                  />
                  <input
                    type="password"
                    ref={password}
                    placeholder="Enter Password"
                  />
                  <button onClick={signInButton}>
                    {signUpFlag ? "Sign Up" : "Sign In"}
                  </button>
                  <span className="forgot">Forgot password?</span>
                </>
              ) : (
                <>
                  <input ref={name} placeholder="Enter Name" />
                  <input ref={email} placeholder="Enter Email" />
                  <input
                    type="password"
                    ref={password}
                    placeholder="Create Password"
                  />
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
                {!signUpFlag ? "Sign Up now" : "Sign In now"}
              </span>
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
