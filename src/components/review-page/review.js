import React, { Component } from "react";

export default class Review extends Component {
  render() {
    return (
      <div className="review">
        <div className="review-title">Resumen de Orden</div>
        <div className="review-products">products goes here</div>
        <div className="review-btns">
          <button
            onClick={() => {
              this.props.history.push("/menu");
            }}
          >
            Regresar A Comprar
          </button>
          <button>Continuar con el pago</button>
        </div>
      </div>
    );
  }
}
