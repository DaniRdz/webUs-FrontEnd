import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class MenuProduct extends Component {
  handleAddtoCart = () => {
    const { _id, title, description, price, imgURL } = this.props;
    this.props.onClick();
    this.props.addCartProduct({ _id, title, description, price, imgURL });
  };
  render() {
    const { title, description, price, imgURL } = this.props;

    return (
      <div className="product">
        <img className="product-img" src={imgURL} />
        <div className="product-info">
          <div className="product-info-title">{title}</div>
          <div className="product-info-line"></div>
          <div className="product-info-description">{description}</div>
          <div className="product-info-price">${price}</div>
          <button className="product-info-btn" onClick={this.handleAddtoCart}>
            Ordenar
          </button>
        </div>
      </div>
    );
  }
}
MenuProduct = connect(null, actions)(MenuProduct);

export default MenuProduct;
