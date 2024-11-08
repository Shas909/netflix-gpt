import { signOut } from "firebase/auth";
import React from "react";
import "../styles/header.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => {
    return store.user;
  });
  console.log("userData", userData);

  const signOutButton = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        window.alert("ERROR");
      });
  };
  return (
    <>
      <div className="header">
        <div className="header-content">
          <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
          {userData ? <button onClick={signOutButton}>Sign Out</button> : null}
        </div>
      </div>
    </>
  );
};

export default Header;
