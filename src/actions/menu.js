import {
  SET_MENU_PRODUCTS,
  SET_MENU_CATEGORIES,
  CHANGE_ACTIVE_LINK,
} from "./types";

import axios from "axios";

export function fetchMenuProducts() {
  return function (dispach) {
    axios.get("http://localhost:8080/products").then((response) => {
      dispach({
        type: SET_MENU_PRODUCTS,
        payload: response.data.products,
      });
    });
  };
}

export function fetchMenuCategories() {
  return {
    type: SET_MENU_CATEGORIES,
    payload: [
      { _id: 0, title: "All", active: true },
      { _id: 1, title: "Papas", active: false },
      { _id: 2, title: "Salchipapas", active: false },
      { _id: 3, title: "Salchipulpos", active: false },
      { _id: 4, title: "Veganos", active: false },
    ],
  };
}

export function changeActiveLink(_id) {
  return {
    type: CHANGE_ACTIVE_LINK,
    payload: _id,
  };
}
