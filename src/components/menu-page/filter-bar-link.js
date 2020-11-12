import React, { Component } from "react";

export default class FilterBar extends Component {
  render() {
    return (
      <div className="fiter-bar-links-container">
        <div className="filter-links">
          <div className="filter-link active-link">All</div>
          <div className="filter-link">Papas</div>
          <div className="filter-link">Salchipapas</div>
          <div className="filter-link">Salchipulpos</div>
          <div className="filter-link">Veganos</div>
        </div>
      </div>
    );
  }
}
