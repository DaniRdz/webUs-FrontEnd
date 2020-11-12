import React, { Component } from "react";

import FilterBar from "./filter-bar-link";

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <FilterBar />
        <h1 className="menu-products">products goes here </h1>
      </div>
    );
  }
}

export default Menu;
