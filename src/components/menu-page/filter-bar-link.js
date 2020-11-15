import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class FilterBar extends Component {
  componentDidMount() {
    this.props.fetchMenuCategories();
  }

  filterLinks() {
    return this.props.categories.map((link) => {
      return (
        <a
          key={link._id}
          onClick={() => this.props.changeActiveLink(link._id)}
          className={`filter-link ${link.active ? "active-link" : ""}`}
        >
          {link.title}
        </a>
      );
    });
  }
  render() {
    return (
      <div className="fiter-bar-links-container">
        <div className="filter-links">{this.filterLinks()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { categories } = state.menu;
  return {
    categories,
  };
}

export default connect(mapStateToProps, actions)(FilterBar);
