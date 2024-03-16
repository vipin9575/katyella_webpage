import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1>Contact </h1>
      <button>
        <Link to={`/`}>Home</Link>
      </button>
    </>
  );
};

export default Contact;
