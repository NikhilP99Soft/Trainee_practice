import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="aboutus">About Us</Link>
      <Link to="contactus">Contact Us</Link>
      <Link to="carrer">Carrer</Link>
    </div>
  );
};

export default Header;
