import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <NavLink className="navbar-brand" to="#">Navbar</NavLink>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      
        <NavLink className="nav-link" to="/login">Login</NavLink>
      
      <li className="nav-item">
        <NavLink className="nav-link" to="/signin">Signin</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/logout">Logout</NavLink>
      </li>
    </ul>
  </div>
</nav>
        </>
    )
}

export default Navbar
