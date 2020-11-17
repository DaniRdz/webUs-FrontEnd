import React, { Component } from "react";
import { connect } from "react-redux";

import FilterBar from "./filter-bar-link";
import MenuProduct from "./menu-product";
import Cart from "./menu-cart";

import * as actions from "../../actions";

class Menu extends Component {
  componentDidMount() {
    this.props.fetchMenuProducts();
  }
  render() {
    return (
      <div className="menu-container">
        <FilterBar />
        <Cart />
        {/* <div className="products">
          {this.props.filteredProducts.map((product) => {
            return <MenuProduct key={product._id} {...product} />;
          })}
        </div> */}
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
