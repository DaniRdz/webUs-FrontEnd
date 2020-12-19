import { SET_ORDERS, CHANGE_STATUS_ORDER, DELETE_ORDER } from "./types";

import axios from "axios";

export function getOrders() {
  return function (dispatch) {
    axios
      .get("https://rdz-core-webus-api.herokuapp.com/orders")
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

export function changeStatusOrder(_id, orderStatus, token) {
  return function (dispatch) {
    axios
      .put(
        `https://rdz-core-webus-api.herokuapp.com/orders/${_id}`,
        { orderStatus },
        {
          headers: { "x-access-token": token },
        }
      )
      .then((response) => {
        dispatch({
          type: CHANGE_STATUS_ORDER,
          payload: _id,
        });
      })
      .catch((err) => {
        console.log("changeStatusOrder error", err);
      });
  };
}

export function deleteOrder(_id, token) {
  return function (dispatch) {
    axios
      .delete(`https://rdz-core-webus-api.herokuapp.com/orders/${_id}`, {
        headers: { "x-access-token": token },
      })
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
