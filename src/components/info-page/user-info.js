import React, { Component } from "react";
import { connect } from "react-redux";

import UserOrder from "./user-order";

import * as actions from "../../actions";

class UserInfo extends Component {
  componentDidMount() {
    this.props.getUserOrders();
  }
  renderOrders() {
    return this.props.userOrders.map((order) => {
      return <UserOrder key={order._id} order={order} />;
    });
  }
  render() {
    return (
      <div className="user-info-container">
        <div className="user-orders">
          <div className="user-orders-title">Estado de Ordenes</div>
          <div className="user-orders-info">
            <div className="user-orders-info-titles">
              <div className="title">No. de Orden</div>
              <div className="title">Cantidad</div>
              <div className="title">Total</div>
              <div className="title">Estatus</div>
            </div>
            <div className="user-orders-info-line-top"></div>
            <div className="user-orders-info-list">{this.renderOrders()}</div>
            <div className="user-orders-info-line-bottom"></div>
          </div>
        </div>
        <div className="user-info">
          <div className="title">Informacion de Usuario</div>
          <div className="user-info__info"></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { userOrders } = state.user;

  return { userOrders };
}

export default connect(mapStateToProps, actions)(UserInfo);
