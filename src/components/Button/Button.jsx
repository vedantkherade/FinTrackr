import React from 'react'
import './styles.css'
function Button({text, onClick, blue, disabled, icon}) {
  return (
    <div className={blue ? 'btn btn-blue' : 'btn'} onClick={onClick}>
         {icon && (
        <span className="google-icon-wrapper">
          <img src={icon} alt="Google" />
        </span>
      )}
      {text}</div>
  )
}

export default Button
