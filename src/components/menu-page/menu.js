import React, { Component } from "react";
import { connect } from "react-redux";

import FilterBar from "./filter-bar-link";
import MenuProduct from "./menu-product";
import Cart from "./menu-cart";
import CartButton from "./cart-button";

import * as actions from "../../actions";

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      showCart: false,
    };
  }
  componentDidMount() {
    this.props.fetchMenuProducts();
    this.props.setCartProducts(); // provisional until connecting with API
  }

  renderProducts() {
    if (this.props.filteredProducts.length === 0) {
      {
        return this.props.menuProducts.map((product) => {
          return (
            <MenuProduct
              onClick={() => this.handleAddtoCart()}
              key={product._id}
              {...product}
            />
          );
        });
      }
    } else {
      {
        return this.props.filteredProducts.map((product) => {
          return (
            <MenuProduct
              onClick={() => this.handleAddtoCart()}
              key={product._id}
              {...product}
            />
          );
        });
      }
    }
  }

  handleAddtoCart() {
    if (!this.state.showCart) {
      this.setState({ showCart: true });
    } else {
      this.setState({ showCart: false });
    }
  }
  render() {
    return (
      <div className="menu-container">
        <FilterBar />
        <CartButton
          className="menu-container-btn"
          icon={
            !this.state.showCart ? "fas fa-utensils" : "far fa-times-circle"
          }
          onClick={() => {
            this.handleAddtoCart();
          }}
        />
        {this.state.showCart ? <Cart /> : null}
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
