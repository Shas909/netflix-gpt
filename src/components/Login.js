import React, { useRef, useState } from "react";
import Header from "./Header";
import "../styles/login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
const Login = () => {
  const dispatch = useDispatch();
  const [signUpFlag, setSignUpFlag] = useState(false);
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
          photoURL: USER_AVATAR,
        })
          .then(() => {
            // Profile updated!
            // ...
            const { displayName, photoURL, uid } = auth.currentUser;

            dispatch(
              addUser({
                userId: uid,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {
            window.alert("Couldn't get user details");
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
  };
  return (
    <>
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
