import React, { Component } from "react";
import { connect } from "react-redux";

import Order from "./order";

import * as actions from "../../actions";

class Orders extends Component {
  componentDidMount() {
    this.props.getOrders();
  }
  renderOrders() {
    return this.props.orders.map((order) => {
      return <Order key={order._id} order={order} />;
    });
  }

  render() {
    return (
      <div className="orders">
        <div className="orders-title">Lista de Ordenes</div>
        <div className="orders-info">
          <div className="orders-info-titles">
            <div className="title">No. de Orden</div>
            <div className="title">Info. de ususario</div>
            <div className="title">Productos</div>
            <div className="title">Cantidad</div>
            <div className="title">Total</div>
            <div className="title">Fecha</div>
            <div className="title">Estatus</div>
          </div>
          <div className="orders-info-line-top"></div>
          <div className="orders-info-list">{this.renderOrders()}</div>
          <div className="orders-info-line-bottom"></div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { orders } = state.orders;
  return { orders };
}

export default connect(mapStateToProps, actions)(Orders);
