import {
  ADD_CART_PRODUCT,
  SET_CART_PRODUCTS,
  SET_USER_INFO,
  SAVE_CART,
  REMOVE_CART_PRODUCT,
  UPDATE_CART,
  CREATE_ORDER,
  USER_REGISTER,
  USER_AUNTHENTICATE,
  USER_LOG_OUT,
  UPDATE_USER,
  GET_USER_ORDERS,
} from "./types";

import axios from "axios";

export function getUserOrders() {
  return function (dispatch) {
    axios
      .get("http://localhost:8080/orders")
      .then((response) => {
        dispatch({
          type: GET_USER_ORDERS,
          payload: response.data.orders,
        });
      })
      .catch((err) => {
        console.log("getUserOrders error", err);
      });
  };
}

export function createOrder(_id) {
  return function (dispatch) {
    axios
      .post("http://localhost:8080/orders", {
        user: { _id },
      })
      .then((response) => {
        dispatch({ type: CREATE_ORDER, payload: response.data });
      })
      .catch((err) => {
        console.log("createOrder error", err);
      });
  };
}

export function updateCart(_id, products) {
  return function (dispatch) {
    axios
      .put(`http://localhost:8080/cart/cart-update/${_id}`, {
        items: products,
      })
      .then((response) => {
        dispatch({ type: UPDATE_CART, payload: response.data });
      })
      .catch((err) => {
        console.log("updateCart error", err);
      });
  };
}

export function saveCart(products) {
  return function (dispatch) {
    axios
      .post("http://localhost:8080/cart/add-to-cart", {
        items: products,
      })
      .then((response) => {
        dispatch({ type: SAVE_CART, payload: response.data.cartId });
      })
      .catch((err) => {
        console.log("We are working in the server sorry");
      });
  };
}

export function setUserInfo(fields, cartId) {
  const { name, phone, address } = fields;
  return function (dispatch) {
    axios
      .post("http://localhost:8080/users/register", {
        name,
        phone,
        address,
        cartProducts: cartId,
      })
      .then((response) => {
        dispatch({ type: SET_USER_INFO, payload: response.data.userInfo });
      })
      .catch((err) => {
        console.log("setUserinfo Error", err);
      });
  };
}

export function userRegister(fields) {
  const { name, email, password } = fields;
  return function (dispatch) {
    axios
      .post("http://localhost:8080/users/register", {
        name,
        email,
        password,
      })
      .then((response) => {
        dispatch({ type: USER_REGISTER, payload: response.data.userInfo });
      })
      .catch((err) => {
        console.log("userRegister error", err);
      });
  };
}

export function userAuthenticate(fields) {
  const { email, password } = fields;
  return function (dispatch) {
    axios
      .post("http://localhost:8080/users/authenticate", {
        email,
        password,
      })
      .then((response) => {
        dispatch({ type: USER_AUNTHENTICATE, payload: response.data });
      })
      .catch((err) => {
        console.log("userAutenticate error", err);
      });
  };
}

export function updateUser(_id, fields, cartId) {
  const { phone, address } = fields;
  return function (dispatch) {
    axios
      .put(`http://localhost:8080/users/${_id}`, {
        phone,
        address,
        cartProducts: cartId,
      })
      .then((response) => {
        dispatch({ type: UPDATE_USER, payload: response.data.user });
      })
      .catch((err) => {
        console.log("updateUSer error", err);
      });
  };
}

export function userLogout() {
  return {
    type: USER_LOG_OUT,
  };
}

export function addCartProduct(product) {
  return {
    type: ADD_CART_PRODUCT,
    payload: product,
  };
}

export function removeCartProduct(pos) {
  return {
    type: REMOVE_CART_PRODUCT,
    payload: pos,
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
