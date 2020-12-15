import { SET_ORDERS, CHANGE_STATUS_ORDER, DELETE_ORDER } from "./types";

import axios from "axios";

export function getOrders() {
  return function (dispatch) {
    axios
      .get("http://localhost:8080/orders")
      .then((response) => {
        dispatch({
          type: SET_ORDERS,
          payload: response.data.orders,
        });
      })
      .catch((err) => {
        console.log("getOrders error", err);
      });
  };
}

export function changeStatusOrder(_id, orderStatus) {
  return function (dispatch) {
    axios
      .put(`http://localhost:8080/orders/${_id}`, { orderStatus })
      .then((response) => {
        dispatch({
          type: CHANGE_STATUS_ORDER,
          payload: response.data,
        });
      })
      .catch((err) => {
        console.log("changeStatusOrder error", err);
      });
  };
}

export function deleteOrder(_id) {
  return function (dispatch) {
    axios
      .delete(`http://localhost:8080/orders/${_id}`)
      .then((response) => {
        dispatch({
          type: DELETE_ORDER,
          payload: _id,
        });
      })
      .catch((err) => {
        console.log("deleteOrder error", err);
      });
  };
}
