import React, { Component } from "react";

export default class Map extends Component {
  render() {
    return (
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466.53403503102425!2d-103.38597125486353!3d20.699165171778034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afffd00c52d9%3A0x97111910141e5d15!2sCARB%C3%93N%20Parrilla%20de%20Barrio%20-%20PROVIDENCIA!5e0!3m2!1ses!2smx!4v1604944466488!5m2!1ses!2smx"
          width="100%"
          height="650"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    );
  }
}
