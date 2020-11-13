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
        <h1 className="menu-products">products goes here </h1>
      </div>
    );
  }
}

export default connect(null, actions)(Menu);
