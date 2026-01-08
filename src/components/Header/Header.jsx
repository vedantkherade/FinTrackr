import React from 'react'
import './styles.css'
function Header() {
  function logoutfnc(){
    alert("Logout");
  }

  return (
    <div className='navbar'>
      <p className="navbar-heading">FinTrackr.</p>
      <p className="navbar-link" onClick={logoutfnc}>Logout</p>
    </div>
  )
}

export default Header
