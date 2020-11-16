import React, { Component } from "react";

class MenuProduct extends Component {
  render() {
    const { title, description, price, imgURL } = this.props;
    return (
      <div className="product">
        {/* <img className="product-img" src={imgURL} /> */}
        <div className="product-title">{title}</div>
        <div className="product-description">{description}</div>
        <div className="product-price">{price}</div>
      </div>
    );
  }
}

export default MenuProduct;
