import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>CONTACT</h2>
      <p>
        You can reach me via email at{" "}
        <a href="mailto:siddheshkulkarni210@gmail.com" className="contact-link">
       siddheshkulkarni210@gmail.com
        </a>
      </p>
      <p>
        Or give me a call at{" "}
        <a href="+917738393682" className="contact-link">
          +917738393682
        </a>
      </p>
    </div>
  );
};

export default Contact;
