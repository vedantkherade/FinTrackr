import React, { useEffect } from 'react'
import './styles.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import userImg from "../../assets/user.svg";

function Header() {
  const [user, loading] = useAuthState(auth);
  const Navigate = useNavigate();
  useEffect(() => {
    if(user){
      Navigate("/dashboard");
    }
  }, [user, loading]);

  function logoutfnc() {
    try {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          toast.success("Logged Out Successfully!");
          Navigate("/");
        })
        .catch((error) => {
          // An error happened.
          toast.error(error.message);
        });
    } catch (e) {
      toast.error(e.message);
    }
  }

return (
  <div className="navbar">
    <p className="navbar-heading">FinTrackr.</p>

    {user && (
      <div style={{display: "flex", alignItems: "center", gap: "0.75rem"}}>
      <img src={user.photoURL ? user.photoURL : userImg} style={{borderRadius: "50%", height:"1.7rem", width:"1.7rem"}} />
      <p className="navbar-link" onClick={logoutfnc}>
        Logout
      </p>
      </div>
    )}
  </div>
);
}

export default Header
