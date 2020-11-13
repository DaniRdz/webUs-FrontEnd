import { SET_MENU_PRODUCTS } from "./types";

import axios from "axios";

export function fetchMenuProducts() {
  return function (dispach) {
    axios.get("http://localhost:8080/products").then((response) => {
      console.log(response.data.products);
      dispach({
        type: SET_MENU_PRODUCTS,
        payload: response.data.products,
      });
    });
  };
}
