import React, { Component } from "react";

export default class Review extends Component {
  render() {
    return (
      <div className="review">
        <div className="review-title">Resumen de Orden</div>

        <div className="review-info">
          <div className="review-info-name">Nombre</div>
          <div className="review-info-qty">Cantidad</div>
          <div className="review-info-price">Precio</div>
          <div className="review-info-line-top"></div>
          <div className="review-info-products">products goes here</div>
          <div className="review-info-line-bot"></div>
          <div className="review-info-total">Total goes here</div>
        </div>

        <div className="review-btns">
          <button
            className="review-btns-back"
            onClick={() => {
              this.props.history.push("/menu");
            }}
          >
            Regresar
          </button>
          <button className="review-btns-continue">Continuar</button>
        </div>
      </div>
    );
  }
}
