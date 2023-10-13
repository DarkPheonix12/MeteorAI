import React from "react";

const Button = ({ styles }) => (
  <button onClick={() => window.location.href='https://calendly.com/aman-gaur5505/discovery-call'} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
  Sure, Let's Talk!!
</button>

);

export default Button;
