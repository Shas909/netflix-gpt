import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => {
    return store.user;
  });

  const signOutButton = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        window.alert("ERROR");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        dispatch(
          addUser({
            userId: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    //when component is unmounted this will execute
    return () => unsubscribe();
  }, []);
  return (
    <>
      <div className="header">
        <div className="header-content">
          <img src={LOGO} />
          {userData ? (
            <div className="user-display">
              <img
                style={{ width: "35px", borderRadius: "50px" }}
                src={userData.photoURL}
              />
              <button onClick={signOutButton}>Sign Out</button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
