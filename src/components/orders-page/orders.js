import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

class Orders extends Component {
  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    return (
      <div className="orders">
        <h1>Orders goes here</h1>
      </div>
    );
  }
}

export default connect(null, actions)(Orders);
