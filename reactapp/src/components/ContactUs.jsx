import React from "react";
import { Link, Outlet } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <h1>Contact us</h1>
      <button>
        <Link to="callme">Callme</Link>
      </button>
      <br />
      <button>
        <Link to="dynamic">Dynamic Routing</Link>
      </button>
      <Outlet />
    </div>
  );
};

export default ContactUs;
