import React, { Component } from "react";
import { connect } from "react-redux";

import FilterBar from "./filter-bar-link";

import * as actions from "../../actions";

class Menu extends Component {
  componentDidMount() {
    this.props.fetchMenuProducts();
  }
  render() {
    return (
      <div className="menu-container">
        <FilterBar />
        {this.props.filteredProducts.map((product) => {
          return (
            <div key={product._id}>
              <div>{product.title}</div>
              <div> {product.description} </div>
            </div>
          );
        })}
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
