import { SET_ORDERS } from "./types";

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
