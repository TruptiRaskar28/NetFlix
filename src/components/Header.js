import React from "react";
import { Link } from "react-router-dom";  // Only Link is needed
import "./Header.css";
import logo from '../Logo.png';

function Header() {
  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <Link to="/signup">  {/* Link that navigates to the SignUp page */}
        <button className="signin">Sign Up</button>
      </Link>
    </header>
  );
}

export default Header;
