import React from "react";

import Logo from "./logo";

export default function () {
  return (
    <div className="footer-wrapper">
      <Logo />
      <div className="media-links-wrapper">
        <i className="fab fa-facebook icon"></i>
        <i className="fab fa-instagram icon"></i>
        <i className="fab fa-twitter icon"></i>
      </div>
    </div>
  );
}
