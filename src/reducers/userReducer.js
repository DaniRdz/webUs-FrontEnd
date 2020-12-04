import actions from "redux-form/lib/actions";
import {
  ADD_CART_PRODUCT,
  REMOVE_CART_PRODUCT,
  SAVE_CART,
  SET_CART_PRODUCTS,
  SET_USER_INFO,
} from "../actions/types";

const INITIAL_STATE = {
  cartProducts: [],
  user: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return { ...state, user: action.payload };

    case SAVE_CART:
      /* console.log(action.payload); */
      return { ...state };

    case SET_CART_PRODUCTS:
      return { ...state, cartProducts: action.payload };

    case REMOVE_CART_PRODUCT:
      const pos = action.payload;
      var updateCart = [];
      state.cartProducts.splice(pos, 1);

      state.cartProducts.map((cartProduct) => {
        updateCart.push(cartProduct);
      });

      return { ...state, cartProducts: updateCart };

    case ADD_CART_PRODUCT:
      var exists = false;
      const newCP = action.payload;
      var cartProducts = [];

      state.cartProducts.map((cartProduct) => {
        if (cartProduct.product._id == newCP._id) {
          exists = true;
          cartProduct.quantity += 1;
        }
        cartProducts.push(cartProduct);
      });

      if (exists == false) {
        cartProducts.push({
          product: newCP,
          quantity: 1,
        });
      }

      return { ...state, cartProducts: cartProducts };

    default:
      return state;
  }
}
