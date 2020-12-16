import React, { Component } from "react";

export default class UserInfo extends Component {
  render() {
    return (
      <div className="user-info-container">
        <div className="user-orders">
          <div className="user-orders-title">Estado de Ordenes</div>
          <div className="user-orders-info">
            <div className="user-orders-info-titles">
              <div className="title">No. de Orden</div>
              <div className="title">Cantidad</div>
              <div className="title">Total</div>
              <div className="title">Estatus</div>
            </div>
            <div className="user-orders-info-line-top"></div>
            <div className="user-orders-info-list">list</div>
            <div className="user-orders-info-line-bottom"></div>
          </div>
        </div>
        <div className="user-info">
          <div className="title">Informacion de Usuario</div>
          <div className="user-info__info"></div>
        </div>
      </div>
    );
  }
}
