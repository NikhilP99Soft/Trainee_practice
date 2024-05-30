import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="about">About Us</Link>
      </li>
      <li>
        <Link to="contactus">Contact Us</Link>
      </li>
    </>
  );
};

export default Header;
