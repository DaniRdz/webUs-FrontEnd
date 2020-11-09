import React from "react";

export default function () {
  return (
    <div className="contact-info-container">
      <div className="contact-info-wrapper">
        <div className="address-info">
          <div className="address-info-title">Direccion</div>
          <div className="address-info-description">
            <i className="fas fa-map-marked-alt icon"></i>
            Av. Terranova 1234 Col. Providencia
          </div>
        </div>
        <div className="phone-info">
          <div className="phone-info-title">Telefono</div>
          <div className="phone-info-description">
            <i className="fas fa-phone-volume icon"></i>
            (333)-333-33-33
          </div>
        </div>
        <div className="schedule-info">
          <div className="schedule-info-title">Horario</div>
          <div className="schedule-info-description">
            <i className="far fa-clock icon"></i>
            Jue-Sab 19:00 - 00:00
          </div>
        </div>
      </div>
    </div>
  );
}
