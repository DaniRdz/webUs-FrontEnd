import React from "react";

import Map from "./map";
import ContactInfo from "./contact-info";

export default function () {
  return (
    <div className="contact-wrapper" id="contact">
      <ContactInfo />
      <Map />
    </div>
  );
}
