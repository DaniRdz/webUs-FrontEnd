import React, { Component } from "react";

class MenuProduct extends Component {
  render() {
    const { title, description, price, imgURL } = this.props;
    return (
      <div className="product">
        <img className="product-img" src={imgURL} />
        <div className="product-info">
          <div className="product-info-title">{title}</div>
          <div className="product-info-line"></div>
          <div className="product-info-description">{description}</div>
          <div className="product-info-price">{price}</div>
          <button className="product-info-btn">Ordenar</button>
        </div>
      </div>
    );
  }
}

export default MenuProduct;