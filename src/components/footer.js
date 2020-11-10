import React from "react";

import Logo from "./logo";

export default function () {
  return (
    <div className="footer-wrapper">
      <Logo />
      <div className="copyright-wrapper">
        &copy; 2020 WEBUS con chalchica &#124; All right reserved.
      </div>
      <div className="media-links-wrapper">
        <a href="#">
          <i className="fab fa-facebook icon"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram icon"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter icon"></i>
        </a>
      </div>
    </div>
  );
}
