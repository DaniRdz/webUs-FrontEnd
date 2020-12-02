import {
  ADD_CART_PRODUCT,
  SET_CART_PRODUCTS,
  SET_USER_INFO,
  SAVE_CART,
} from "./types";

import axios from "axios";

export function saveCart(products) {
  return function (dispatch) {
    axios
      .post("http://localhost:8080/cart/add-to-cart", {
        items: products,
      })
      .then((response) => {
        dispatch({ type: SAVE_CART, payload: response.data });
      })
      .catch((err) => {
        console.log("We are working in the server sorry");
      });
  };
}

export function setUserInfo(fields) {
  return {
    type: SET_USER_INFO,
    payload: fields,
  };
}

export function addCartProduct(product) {
  return {
    type: ADD_CART_PRODUCT,
    payload: product,
  };
}

export function setCartProducts() {
  return {
    type: SET_CART_PRODUCTS,
    payload: [
      /* {
        product: {
          _id: "5f9b16c049782a6b00ce1238",
          title: "Fries with meat",
          description: "some description",
          price: 12.99,
          imgURL:
            "https://images.unsplash.com/photo-1577715694662-6bcf16c06e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
        quantity: 1,
      },
      {
        product: {
          _id: "5f9b18edc0e4dc5154519083",
          title: "Fries",
          description: "Great Description",
          price: 12.99,
          imgURL:
            "https://images.unsplash.com/photo-1593507369837-9adcc0c0bdc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        },
        quantity: 1,
      }, */
    ],
  };
}
