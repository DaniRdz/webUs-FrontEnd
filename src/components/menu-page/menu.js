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

  renderProducts() {
    if (this.props.filteredProducts.length === 0) {
      {
        return this.props.menuProducts.map((product) => {
          return <MenuProduct key={product._id} {...product} />;
        });
      }
    } else {
      {
        return this.props.filteredProducts.map((product) => {
          return <MenuProduct key={product._id} {...product} />;
        });
      }
    }
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
        <div className="products">{this.renderProducts()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { filteredProducts, menuProducts } = state.menu;

  return {
    filteredProducts,
    menuProducts,
  };
}

export default connect(mapStateToProps, actions)(Menu);
