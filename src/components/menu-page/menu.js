import React, { Component } from "react";
import { connect } from "react-redux";

import FilterBar from "./filter-bar-link";
import MenuProduct from "./menu-product";
import Cart from "./menu-cart";
import CartButton from "./cart-button";

import * as actions from "../../actions";

class Menu extends Component {
  componentDidMount() {
    this.props.fetchMenuProducts();
  }

  handleAddtoCart() {
    if (document.getElementById("menu-cart").classList.contains("cart-hiden")) {
      document.getElementById("menu-cart").classList.remove("cart-hiden");
    } else {
      document.getElementById("menu-cart").classList.add("cart-hiden");
    }
  }
  render() {
    return (
      <div className="menu-container">
        <FilterBar />
        <CartButton
          className="menu-container-btn"
          icon="fas fa-utensils"
          onClick={() => {
            this.handleAddtoCart();
          }}
        />
        <Cart />
        <div className="products">
          {this.props.filteredProducts.map((product) => {
            return <MenuProduct key={product._id} {...product} />;
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { filteredProducts } = state.menu;

  return {
    filteredProducts,
  };
}

export default connect(mapStateToProps, actions)(Menu);
